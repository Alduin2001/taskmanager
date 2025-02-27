import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports:[
    JwtModule.registerAsync({
      imports:[ConfigModule],
      useFactory:async (configService:ConfigService)=>({
        secret:configService.get<string>('SECRET'),
        signOptions:{
          expiresIn:'12h'
        }
      }),
      inject:[ConfigService]
    })
  ],
  controllers: [TaskController],
  providers: [TaskService,PrismaService,ConfigService],
})
export class TaskModule {}
