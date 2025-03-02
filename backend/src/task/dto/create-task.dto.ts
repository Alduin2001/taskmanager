import { Type } from "class-transformer";
import { IsArray, IsString, ValidateNested } from "class-validator";
import { TaskItemDto } from "./taskItemDto";

export class CreateTaskDto {
    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>TaskItemDto)
    tasks:TaskItemDto[]

}
