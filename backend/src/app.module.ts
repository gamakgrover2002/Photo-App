import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './configration/config';
import { PhotosModule } from './modules/photos/photos.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    PhotosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
