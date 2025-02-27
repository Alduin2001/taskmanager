import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Req, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { UserRequest } from 'src/interfaces/UserI';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/guards/role/role.decorator';
import { Role } from 'src/guards/role/role.enum';
import { RoleGuard } from 'src/guards/role/role.guard';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body(new ValidationPipe()) createTaskDto: CreateTaskDto, @Req() req:UserRequest) {
    return this.taskService.create(createTaskDto,req.user.id);
  }

  @UseGuards(AuthGuard('jwt'),RoleGuard)
  @Roles(Role.Admin)
  @Get()
  findAll(@Req() req:UserRequest) {
    console.log(req.user.role);
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto, @Req() req:UserRequest) {
    return this.taskService.update(+id, updateTaskDto,req.user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
