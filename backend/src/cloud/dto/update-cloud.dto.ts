import { PartialType } from '@nestjs/mapped-types';
import { CreateCloudDto } from './create-cloud.dto';

export class UpdateCloudDto extends PartialType(CreateCloudDto) {}
