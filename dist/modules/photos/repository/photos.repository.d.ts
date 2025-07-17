import { PrismaClient } from '@prisma/client';
export declare class PhotoRepository {
    private readonly prismaClient;
    constructor(prismaClient: PrismaClient);
    getTopPhotos(): Promise<any[]>;
}
