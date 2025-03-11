import { Module } from '@nestjs/common';
import { FolderService } from './folder.service';
import { FolderController } from './folder.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

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
  controllers: [FolderController],
  providers: [FolderService,PrismaService],
})
export class FolderModule {}
