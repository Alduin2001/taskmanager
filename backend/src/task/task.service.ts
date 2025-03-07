import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaPromise } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateStatusDto } from './dto/updateStatus.dto';
import { FilterTaskDto } from './dto/filterTask.dto';

@Injectable()
export class TaskService {
  constructor(
    private prisma:PrismaService
  ){}
  // Добавление задач
  async create(createTaskDto: CreateTaskDto, user_id:number) {
    try {
      for(const task of createTaskDto.tasks){
        console.log(task);
        await this.prisma.task.create({data:{
          name:task.name,
          description:task.description,
          userId:user_id
        }})
      }
      return HttpStatus.CREATED;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  // Вывод всех задач для админа
  async findAll() {
    try {
      const tasks = await this.prisma.task.findMany({select:{
        name:true,
        description:true,
        createdAt:true,
        user:{select:{
          name:true,
          surname:true
        }}
      }});
      return {tasks};
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  // Вывод всех задач для пользователя
  async getMyTasks(user_id:number){
    try {
      const tasks = await this.prisma.task.findMany({where:{userId:user_id}});
      return {tasks};
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  // Вывести одну задачу для пользователя
  async findOneMy(id:number,user_id:number){
    try {
      const task = await this.prisma.task.findFirst({where:{id,userId:user_id}});
      return {task};
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  // Вывести одну задачу для админа
  async findOne(id: number) {
    try {
      const task = await this.prisma.task.findFirst({where:{id}});
      if(!task){
        throw new BadRequestException('Задача не найдена');
      }
      return {task};
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  // Фильтрация задач для пользователя
  async filterTasksUser(filterTaskDto:FilterTaskDto,user_id:number){
    try {
      const tasks = await this.prisma.task.findMany({
        where:{
          userId:user_id,
          ...(filterTaskDto.name && {name:{contains:filterTaskDto.name,mode:'insensitive'}}),
          ...(filterTaskDto.startDate && {createdAt:{gte:new Date(filterTaskDto.startDate)}}),
          ...(filterTaskDto.endDate && {createdAt:{lte:new Date(filterTaskDto.endDate)}})
        },
        select:{
          id:true,
          name:true,
          description:true,
          createdAt:true,
          is_completed:true
        }
      });
      return {tasks};
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  // Фильтрация задач для админа
  async filterTasksAdmin(filterTaskDto:FilterTaskDto){
    try {
      const tasks = await this.prisma.task.findMany({
        where:{
          ...(filterTaskDto.name && {name:{contains:filterTaskDto.name,mode:'insensitive'}}),
          ...(filterTaskDto.startDate && {createdAt:{gte:new Date(filterTaskDto.startDate)}}),
          ...(filterTaskDto.endDate && {createdAt:{lte:new Date(filterTaskDto.endDate)}})
        },
        select:{
          name:true,
          description:true,
          createdAt:true,
          is_completed:true,
          user:{select:{
            name:true,
            surname:true
          }}
        }
      });
      return {tasks};
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  // Отметка о выполнении задачи
  async completeTask(id:number,updateStatusDto:UpdateStatusDto,user_id:number){
    try {
      const {is_completed} = updateStatusDto;

      const task = await this.prisma.task.update({
        where:{id:id,userId:user_id},
        data:{is_completed}
      });
      if(!task){
        throw new BadRequestException('Не удалось обновить статус задачи');
      }
      return HttpStatus.OK;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  // Обновить задачу
  async update(id: number, updateTaskDto: UpdateTaskDto,user_id:number) {
    try {
      const task = await this.prisma.task.update({where:{id:id,userId:user_id},data:{...updateTaskDto}});
      if(!task){
        throw new BadRequestException('Не удалось обновить');
      }
      return HttpStatus.OK;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  // Удалить задачу
  async remove(id: number, user_id:number) {
    try {
      const deleted = await this.prisma.task.delete({where:{id:id,userId:user_id}});
      if(!deleted){
        throw new BadRequestException('Не удалось удалить таск');
      }
      return HttpStatus.OK;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
