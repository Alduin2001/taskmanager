import { IsString, MinLength } from "class-validator";

export class CreateAuthDto {
    @IsString()
    email:string
    @MinLength(4,{message:'Пароль должен содержать 4 символа'})
    password:string
}
