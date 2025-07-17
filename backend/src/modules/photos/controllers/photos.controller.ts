import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { Photoservice } from '../service/photos.service';
import { Photos } from '../types/types';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('/photos')
export class PhotoController {
  constructor(private readonly photoservice: Photoservice) {}
  @Get()
  getTopPhotos(): Promise<Photos[]> {
    return this.photoservice.getTopPhotos();
  }
  @Post('/upload')
  @UseInterceptors(AnyFilesInterceptor())
  uploadFile(@UploadedFiles() files: Array<Express.Multer.File>): void {
    console.log(files);
    // return `File ${file[0].originalname} uploaded successfully!`;
  }
  @Patch('/like/:id')
  likePhoto(@Param('id') id: string): Promise<Photos> {
    return this.photoservice.likePhoto(id);
  }
  @Delete('/delete/:id')
  deletePhoto(@Param('id') id: string): Promise<Photos> {
    return this.photoservice.deletePhoto(id);
  }
  @Patch('/report/:id')
  reportPhoto(@Param('id') id: string): Promise<Photos> {
    return this.photoservice.reportPhoto(id);
  }
}
