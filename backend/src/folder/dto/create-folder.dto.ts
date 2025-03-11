import { IsString } from "class-validator";

export class CreateFolderDto {
    @IsString()
    name:string
}
