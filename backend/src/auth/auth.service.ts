import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PayloadI } from 'src/interfaces/PayloadI';

@Injectable()
export class AuthService {
  constructor(
    private prisma:PrismaService,
    private jwtService:JwtService
  ){}
  async create(createAuthDto: CreateAuthDto) {
    console.log('Here',process.env.SECRET);
    try {
      const {email,password} = createAuthDto;
      const finded = await this.prisma.user.findUnique({where:{email}});
      if(!finded){
        throw new BadRequestException('Пользователь не найден');
      }
      const findedByPass = await bcrypt.compare(password,finded.password);
      if(!findedByPass){
        throw new BadRequestException('Пользователь не найден');
      }
      const payload:PayloadI = {
        id:finded.id,
        role:finded.roleId
      };
      const token = this.jwtService.sign(payload)
      return {token:token,role:finded.roleId};
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findProfile(id:number) {
    try {
      const user = await this.prisma.user.findFirst({where:{id},select:{
        name:true,
        surname:true,
        email:true
      }});
      return {user};
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
