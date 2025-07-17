"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImages = void 0;
const cloudinary_1 = require("cloudinary");
const config = {
    cloud_name: 'davvh9qhb',
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
};
exports.uploadImages = void (async function () {
    cloudinary_1.v2.config({
        config,
    });
    const uploadResult = await cloudinary_1.v2.uploader
        .upload('https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
        public_id: 'shoes',
    })
        .catch((error) => {
        console.log(error);
    });
    console.log(uploadResult);
    const optimizeUrl = cloudinary_1.v2.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto',
    });
    console.log(optimizeUrl);
    const autoCropUrl = cloudinary_1.v2.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    console.log(autoCropUrl);
})();
//# sourceMappingURL=cloudinary.js.map