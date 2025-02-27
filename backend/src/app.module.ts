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

@Global()
@Module({
  imports: [
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
    TaskModule
  ],
  controllers: [],
  providers: [PrismaService,JwtService,JwtStrategy],
})
export class AppModule {}
