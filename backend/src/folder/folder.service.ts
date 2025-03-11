import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FolderService {
  constructor(
    private prisma:PrismaService
  ){}
  // Создание папки
  async create(createFolderDto: CreateFolderDto,user_id:number) {
    try {
      const {name} = createFolderDto;
      const folder = await this.prisma.folder.create({data:{
        ownerId:user_id,
        name
      }});
      if(!folder){
        throw new BadRequestException('Не удалось создать папку');
      }
      return HttpStatus.CREATED;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  // Получение моих папок
  async findMyAll(user_id:number) {
    try {
      const folders = await this.prisma.folder.findMany({
        where:{ownerId:user_id},
        select:{
          name:true
        }
      });
      return {folders};
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  // Получение одной папки по айди
  async findOne(id: number,user_id:number) {
    try {
      const folder = await this.prisma.folder.findFirst({where:{id}});
      if(!folder){
        throw new BadRequestException('Не удалось найти папку');
      }
      return {folder};
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  // Обновление одной папки по айди
  async update(id: number, updateFolderDto: UpdateFolderDto,user_id:number) {
    try {
      const folder = await this.prisma.folder.update({where:{id,ownerId:user_id},data:{
        ...updateFolderDto
      }});
      if(!folder){
        throw new BadRequestException('Не удалось обновить');
      }
      return HttpStatus.OK;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  // Удаление одной папки по айди
  async remove(id: number,user_id:number) {
    try {
      const folder = await this.prisma.folder.delete({where:{id,ownerId:user_id}});
      if(!folder){
        throw new BadRequestException('Не удалось удалить');
      }
      return HttpStatus.OK;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
