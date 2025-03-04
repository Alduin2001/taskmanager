import { IsDateString, IsOptional, IsString } from "class-validator";

export class FilterTaskDto{
    @IsOptional()
    @IsString()
    name?:string
    @IsOptional()
    @IsDateString()
    startDate?:string
    @IsOptional()
    @IsDateString()
    endDate?:string

}