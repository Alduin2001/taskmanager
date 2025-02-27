import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    name:string
    @IsString()
    surname:string
    @IsEmail({},{message:'Некорректный ввод почты'})
    email:string
    @MinLength(4,{message:'Пароль должен содержать 4 символа'})
    password:string
}
