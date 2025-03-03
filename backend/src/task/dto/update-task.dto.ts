import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { TaskItemDto } from './taskItemDto';

export class UpdateTaskDto extends PartialType(TaskItemDto) {}
