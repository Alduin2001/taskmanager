import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UseInterceptors, Req, UploadedFile } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UserRequest } from 'src/interfaces/UserI';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  // Создание постов
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(FileInterceptor('image',{
    storage:diskStorage({
      destination:'./uploads/posts',
      filename(req, file, callback) {
        const filename = `${Date.now()}-${req.file?.originalname}`;
        callback(null,filename);
      },
    })
  }))
  @Post()
  create(@Body() createArticleDto: CreateArticleDto,@Req() req:UserRequest,@UploadedFile() file:Express.Multer.File) {
    return this.articleService.create(createArticleDto,req.user.id,file.filename);
  }

  // Получение всех постов
  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  // Получение одного поста по id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }
  // Обновление одного поста
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }
  // Удаление одного поста
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }
}
