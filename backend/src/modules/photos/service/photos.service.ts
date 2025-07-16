import { Injectable } from '@nestjs/common';
import { PhotoRepository } from '../repository/photos.repository';
import { Photos } from '../types/types';

@Injectable()
export class Photoservice {
  constructor(private readonly photoRepository: PhotoRepository) {}

  getTopPhotos(): Promise<Photos[]> {
    return this.photoRepository.getTopPhotos();
  }
  likePhoto(id: string): Promise<Photos> {
    return this.photoRepository.likePhoto(id);
  }
  uploadFile(files: Array<Express.Multer.File>): void {
    console.log(files);
    // return `File ${file[0].originalname} uploaded successfully!`;
  }
  deletePhoto(id: string): Promise<Photos> {
    return this.photoRepository.deletePhoto(id);
  }
  reportPhoto(id: string): Promise<Photos> {
    return this.photoRepository.deletePhoto(id); // Placeholder for reporting logic
  }
}
