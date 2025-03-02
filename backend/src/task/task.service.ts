import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaPromise } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(
    private prisma:PrismaService
  ){}
  async create(createTaskDto: CreateTaskDto, user_id:number) {
    try {
      for(const task of createTaskDto.tasks){
        await this.prisma.task.create({data:{
          name:task.name,
          description:task.descrition,
          userId:user_id
        }})
      }
      return HttpStatus.CREATED;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

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

  async update(id: number, updateTaskDto: UpdateTaskDto,user_id:number) {
    try {
      // const task = await this.prisma.task.update({where:{id:id,userId:user_id},data:{...updateTaskDto}});
      // if(!task){
      //   throw new BadRequestException('Не удалось обновить');
      // }
      return HttpStatus.OK;
    } catch (error) {
      throw new BadRequestException()
    }
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
