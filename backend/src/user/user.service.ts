import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private prisma:PrismaService
  ){}
  async create(createUserDto: CreateUserDto) {
    try {
      const {name,surname,email,password} = createUserDto;
      const hashed = await bcrypt.hash(password,5);
      const user = await this.prisma.user.create({data:{
        name,
        surname,
        email,
        password:hashed,
        roleId:2
      }});
      if(!user){
        throw new BadRequestException('Не удалось создать пользователя');
      }
      return HttpStatus.CREATED;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    try {
      const users = await this.prisma.user.findMany();
      return {users};
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOne(id: number) {
    try {
      const user = await this.prisma.user.findFirst({where:{id}});
      if(!user){
        throw new BadRequestException('Пользователь не найден');
      }
      return {user};
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    try {
      const user = await this.prisma.user.delete({where:{id}});
      if(!user){
        throw new BadRequestException('Не удалось удалить пользователя');
      }
      return HttpStatus.OK;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
