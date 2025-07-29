import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './configration/config';
import { PhotosModule } from './modules/photos/photos.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { JwtModule } from './modules/jwt/jwt.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    PhotosModule,
    UserModule,
    PrismaModule,
    JwtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
