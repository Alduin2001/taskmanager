import { IsDateString, IsOptional, IsString } from "class-validator";

export class FilterArticleDto{
    @IsOptional()
    @IsString()
    header?:string | undefined
    @IsOptional()
    @IsDateString()
    startDate?:string | undefined
    @IsOptional()
    @IsDateString()
    endDate?:string | undefined
    @IsOptional()
    @IsString()
    name?:string | undefined
}