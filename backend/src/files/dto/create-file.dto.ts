import { IsNumber } from "class-validator";

export class CreateFileDto {
    @IsNumber()
    folderId:number
}
