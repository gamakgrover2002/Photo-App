import { Module } from '@nestjs/common';
import { PhotoController } from './controllers/photos.controller';

@Module({
  controllers: [PhotoController],
  providers: [],
  exports: [],
  imports: [],
})
export class PhotosModule {}
