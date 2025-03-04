import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Req, UseGuards, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UserRequest } from 'src/interfaces/UserI';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/guards/role/role.decorator';
import { Role } from 'src/guards/role/role.enum';
import { RoleGuard } from 'src/guards/role/role.guard';
import { UpdateStatusDto } from './dto/updateStatus.dto';
import { FilterTaskDto } from './dto/filterTask.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  // Создать задачу
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body(new ValidationPipe()) createTaskDto: CreateTaskDto, @Req() req:UserRequest) {
    return this.taskService.create(createTaskDto,req.user.id);
  }
  // Вывести список всех задач
  @UseGuards(AuthGuard('jwt'),RoleGuard)
  @Roles(Role.Admin)
  @Get('all_tasks')
  findAll(@Req() req:UserRequest) {
    console.log(req.user.role);
    return this.taskService.findAll();
  }
  // Вывести список всех задач, которые добавил пользователь
  @UseGuards(AuthGuard('jwt'))
  @Get('my_all')
  getMyTasks(@Req() req:UserRequest){
    return this.taskService.getMyTasks(req.user.id);
  }

  // Вывести одну задачу для админа
  @UseGuards(AuthGuard('jwt'),RoleGuard)
  @Roles(Role.Admin)
  @Get('admin/:id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }
  // Вывести одну задачу для пользователя
  @UseGuards(AuthGuard('jwt'))
  @Get('mytask/:id')
  findOneMy(id:number,@Req() req:UserRequest){
    return this.taskService.findOneMy(id,req.user.id);
  }
  // Фильтрация задач для пользователя
  @UseGuards(AuthGuard('jwt'))
  @Get('filter_user_tasks')
  filterUserTasks(@Query() filterTaskDto:FilterTaskDto,@Req() req:UserRequest){
    return this.taskService.filterTasksUser(filterTaskDto,req.user.id);
  }
  // Фильтрация задач для админа
  @UseGuards(AuthGuard('jwt'),RoleGuard)
  @Roles(Role.Admin)
  @Get('filter_admin_tasks')
  filterAdminTasks(@Query() filterTaskDto:FilterTaskDto,@Req() req:UserRequest){
    return this.taskService.filterTasksAdmin(filterTaskDto);
  }
  // Обновить задачу
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto, @Req() req:UserRequest) {
    return this.taskService.update(+id, updateTaskDto,req.user.id);
  }
  // Обновить статус задачи
  @UseGuards(AuthGuard('jwt'))
  @Patch('complete_task/:id')
  completeTask(@Param('id') id:string,@Body() UpdateStatusDto:UpdateStatusDto,@Req() req:UserRequest){
    return this.taskService.completeTask(+id,UpdateStatusDto,req.user.id);
  }
  // Удалить задачу
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string, @Req() req:UserRequest) {
    return this.taskService.remove(+id,req.user.id);
  }
}
