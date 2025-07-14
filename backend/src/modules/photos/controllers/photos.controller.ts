import { Controller, Get } from '@nestjs/common';

@Controller('photos')
export class PhotoController {
  constructor(private readonly photoservice: any) {}
  @Get()
  getTopPhotos(): string {
    return this.photoservice.getTopPhotos();
  }
}
