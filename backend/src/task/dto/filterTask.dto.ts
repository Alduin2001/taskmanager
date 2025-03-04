import { IsDateString, IsOptional, IsString } from "class-validator";

export class FilterTaskDto{
    @IsOptional()
    @IsString()
    name?:string | undefined
    @IsOptional()
    @IsDateString()
    startDate?:string | undefined
    @IsOptional()
    @IsDateString()
    endDate?:string | undefined

}