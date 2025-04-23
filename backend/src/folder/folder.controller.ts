import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { FolderService } from './folder.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserRequest } from 'src/interfaces/UserI';

@Controller('folder')
export class FolderController {
  constructor(private readonly folderService: FolderService) {}

  // Создание папки
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body(new ValidationPipe()) createFolderDto: CreateFolderDto,@Req() req:UserRequest) {
    return this.folderService.create(createFolderDto,req.user.id);
  }
  // Вывод папок
  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Req() req:UserRequest) {
    return this.folderService.findMyAll(req.user.id);
  }

  // Получение одной папки по айди
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string,@Req() req:UserRequest) {
    return this.folderService.findOne(+id,req.user.id);
  }
  // Обновление одной папки по айди
  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFolderDto: UpdateFolderDto,@Req() req:UserRequest) {
    return this.folderService.update(+id, updateFolderDto,req.user.id);
  }
  // Удаление одной папки по айди
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string,@Req() req:UserRequest) {
    return this.folderService.remove(+id,req.user.id);
  }
}
