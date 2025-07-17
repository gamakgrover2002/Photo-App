// src/photos/photos.module.ts
import { Module } from '@nestjs/common';

import { PrismaClient } from '@prisma/client';
import { PhotosRepository } from 'src/modules/photos/repository/photos.repository';

@Module({
  providers: [
    PhotosRepository,
    {
      provide: PrismaClient,
      useClass: PrismaClient, // tell Nest how to provide this
    },
  ],
  exports: [PhotosRepository],
})
export class PhotosModule {}
