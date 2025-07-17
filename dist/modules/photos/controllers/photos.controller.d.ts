import { PhotoService } from '../service/photos.service';
export declare class PhotoController {
    private readonly photoservice;
    constructor(photoservice: PhotoService);
    getTopPhotos(): string;
}
