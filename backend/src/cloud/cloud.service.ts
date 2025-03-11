import { Injectable } from '@nestjs/common';
import { CreateCloudDto } from './dto/create-cloud.dto';
import { UpdateCloudDto } from './dto/update-cloud.dto';

@Injectable()
export class CloudService {
  create(createCloudDto: CreateCloudDto) {
    return 'This action adds a new cloud';
  }

  findAll() {
    return `This action returns all cloud`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cloud`;
  }

  update(id: number, updateCloudDto: UpdateCloudDto) {
    return `This action updates a #${id} cloud`;
  }

  remove(id: number) {
    return `This action removes a #${id} cloud`;
  }
}
