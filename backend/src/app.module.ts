import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './config/jwt.strategy';
import { ArticleModule } from './article/article.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CloudModule } from './cloud/cloud.module';
import { FolderModule } from './folder/folder.module';

console.log('Uploads dir',join(__dirname,'../uploads/'))

@Global()
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath:join(__dirname,'../uploads'),
      serveRoot:'/uploads'
    }),
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true
    }),
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.registerAsync({
      global:true,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('SECRET'),
        signOptions: {
          expiresIn: '12h',
        },
      }),
      inject: [ConfigService],
    }),
    RoleModule,
    UserModule,
    AuthModule,
    TaskModule,
    ArticleModule,
    CloudModule,
    FolderModule
  ],
  controllers: [],
  providers: [PrismaService,JwtService,JwtStrategy],
})
export class AppModule {}
