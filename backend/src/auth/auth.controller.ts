import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Res, UseGuards, Req } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserRequest } from 'src/interfaces/UserI';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('create')
  async create(@Body(new ValidationPipe()) createAuthDto: CreateAuthDto, @Res() res:Response) {
    const {token,role} = await this.authService.create(createAuthDto);
    console.log(createAuthDto);
    res.cookie('jwt',token,{
      sameSite:'strict',
      maxAge:1000*60*60*12
    });
    return res.status(200).json({role});
  }
  @UseGuards(AuthGuard('jwt'))
  @Post('logout')
  logoutUser(@Res() res:Response){
    res.clearCookie('jwt');
    return res.status(200).json({msg:"Logout"});
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  findAll(@Req() req:UserRequest) {
    return this.authService.findProfile(req.user.id);
  }
}
