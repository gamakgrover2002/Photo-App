import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Photos } from '../types/types';

@Injectable()
export class PhotoRepository {
  constructor(private readonly prismaClient: PrismaClient) {}
  async getTopPhotos(
    page: number,
    limit: number,
    isTop: boolean,
  ): Promise<Photos[]> {
    return this.prismaClient.photo.findMany({
      select: {
        alt: true,
        id: true,
        number_liked: true,
        url: true,
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
      where: {
        number_liked: {
          gte: isTop ? 10 : -1,
        },
      },
      orderBy: {
        number_liked: 'desc',
      },
      take: limit,
      skip: limit * (page - 1),
    });
  }
  async likePhoto(id: string): Promise<Photos> {
    return this.prismaClient.photo.update({
      where: { id },
      data: { number_liked: { increment: 1 } },
    });
  }
  async deletePhoto(id: string): Promise<Photos> {
    return this.prismaClient.photo.delete({
      where: { id },
    });
  }
}
