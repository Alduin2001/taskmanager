import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/config/jwt.strategy';
import { PrismaService } from 'src/prisma/prisma.service';
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
  controllers: [AuthController],
  providers: [AuthService,PrismaService,ConfigService],
})
export class AuthModule {}
