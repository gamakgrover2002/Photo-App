import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

const config = {
  cloud_name: 'davvh9qhb',
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
};
@Injectable()
export class CloudinaryService {
  uploadImages = void (async function () {
    cloudinary.config({
      config,
    });
    const uploadResult = await cloudinary.uploader
      .upload(
        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg',
        {
          public_id: 'shoes',
        },
      )
      .catch((error) => {
        console.log(error);
      });

    const optimizeUrl = cloudinary.url('shoes', {
      fetch_format: 'auto',
      quality: 'auto',
    });

    console.log(optimizeUrl);
    return uploadResult;
  })();
}
