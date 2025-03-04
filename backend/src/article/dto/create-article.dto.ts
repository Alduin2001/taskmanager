import { IsString } from "class-validator";

export class CreateArticleDto {
    @IsString()
    header:string
    @IsString()
    body:string
}
