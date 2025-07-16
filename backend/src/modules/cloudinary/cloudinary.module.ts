import { Module } from '@nestjs/common';
import { CloudinaryService } from './service/cloudinary.service';

@Module({
  exports: [CloudinaryService],
})
export class CloudinaryModule {}
