import { IsString } from "class-validator";

export class TaskItemDto{
    @IsString()
    name:string
    @IsString()
    description:string
}