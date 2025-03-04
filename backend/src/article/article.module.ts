import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
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
  controllers: [ArticleController],
  providers: [ArticleService,PrismaService,ConfigService],
})
export class ArticleModule {}
