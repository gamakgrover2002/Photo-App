import { Module } from '@nestjs/common';
import { PhotoController } from './controllers/photos.controller';
import { Photoservice } from './service/photos.service';
import { PhotoRepository } from './repository/photos.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [PhotoController],
  providers: [Photoservice, PhotoRepository],
  exports: [],
  imports: [PrismaModule],
})
export class PhotosModule {}
