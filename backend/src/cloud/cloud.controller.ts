import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CloudService } from './cloud.service';
import { CreateCloudDto } from './dto/create-cloud.dto';
import { UpdateCloudDto } from './dto/update-cloud.dto';

@Controller('cloud')
export class CloudController {
  constructor(private readonly cloudService: CloudService) {}

  @Post()
  create(@Body() createCloudDto: CreateCloudDto) {
    return this.cloudService.create(createCloudDto);
  }

  @Get()
  findAll() {
    return this.cloudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cloudService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCloudDto: UpdateCloudDto) {
    return this.cloudService.update(+id, updateCloudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cloudService.remove(+id);
  }
}
