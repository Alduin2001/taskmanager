import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { FolderService } from './folder.service';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserRequest } from 'src/interfaces/UserI';

@Controller('folder')
export class FolderController {
  constructor(private readonly folderService: FolderService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body(new ValidationPipe()) createFolderDto: CreateFolderDto,@Req() req:UserRequest) {
    return this.folderService.create(createFolderDto,req.user.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Req() req:UserRequest) {
    return this.folderService.findMyAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.folderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFolderDto: UpdateFolderDto) {
    return this.folderService.update(+id, updateFolderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.folderService.remove(+id);
  }
}
