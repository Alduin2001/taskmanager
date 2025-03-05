import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FilterArticleDto } from './dto/filter-article.dto';

@Injectable()
export class ArticleService {
  constructor(
    private prisma:PrismaService
  ){}
  // Создание постов
  async create(createArticleDto: CreateArticleDto,user_id:number,filename:string) {
    try {
      const {header,body} = createArticleDto;
      const article = await this.prisma.article.create({data:{header,body,authorId:user_id,image:filename}});
      if(!article){
        throw new BadRequestException('Не удалось добавить пост');
      }
      return HttpStatus.CREATED;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  // Вывод всех постов
  async findAll() {
    try {
      const articles = await this.prisma.article.findMany({
        select:{
          id:true,
          header:true,
          image:true,
          createdAt:true,
          author:{select:{
            name:true,
            surname:true
          }}
        }
      });
      return {articles};
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  // Поиск одного по айди
  async findOne(id: number) {
    try {
      const article = await this.prisma.article.findFirst({
        where:{id},
        select:{
          id:true,
          header:true,
          image:true,
          body:true,
          createdAt:true,
          author:{select:{
            name:true,
            surname:true
          }}
        }
      });
      return {article};
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  // Фильтрация постов
  async filterArticle(filterArticleDto:FilterArticleDto){
    try {
      const articles = await this.prisma.article.findMany({
        where:{
          ...(filterArticleDto.name && {header:{contains:filterArticleDto.header,mode:'insensitive'}}),
          ...(filterArticleDto.startDate && {createdAt:{gte: new Date(filterArticleDto.startDate)}}),
          ...(filterArticleDto.endDate && {createdAt:{lte: new Date(filterArticleDto.endDate)}}),
          ...(filterArticleDto.name && {author:{name:{contains:filterArticleDto.name,mode:'insensitive'}}})
        }
      });
      return {articles};
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  // Обновление поста
  async update(id: number, updateArticleDto: UpdateArticleDto) {
    try {
      const update = await this.prisma.article.update({where:{id},data:{
        ...updateArticleDto
      }});
      if(!update){
        throw new BadRequestException('Не удалось обновить');
      }
      return HttpStatus.OK;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  // Удаление одного по айди
  async remove(id: number) {
    try {
      const deleted = await this.prisma.article.delete({where:{id}});
      if(!deleted){
        throw new BadRequestException('Не удалось удалить');
      }
      return HttpStatus.OK;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
