import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[
    JwtModule.registerAsync({
      imports:[ConfigModule],
      useFactory:async (configService:ConfigService)=>({
        secret:configService.get<string>('SECRET'),
        signOptions:{expiresIn:'12h'}
      }),
      inject:[ConfigService]
    })
  ],
  controllers: [FilesController],
  providers: [FilesService,PrismaService],
})
export class FilesModule {}
