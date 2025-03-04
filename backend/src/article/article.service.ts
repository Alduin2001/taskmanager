import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor(
    private prisma:PrismaService
  ){}
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

  findAll() {
    return `This action returns all article`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
