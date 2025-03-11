import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FolderService {
  constructor(
    private prisma:PrismaService
  ){}
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

  findOne(id: number) {
    return `This action returns a #${id} folder`;
  }

  update(id: number, updateFolderDto: UpdateFolderDto) {
    return `This action updates a #${id} folder`;
  }

  remove(id: number) {
    return `This action removes a #${id} folder`;
  }
}
