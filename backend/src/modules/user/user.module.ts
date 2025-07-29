import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UserService } from './service/user.service';
import { UserRepository } from './repsoitory/user.repository';
import { BcryptModule } from '../bcrypt/bcrypt.module';
import { JwtModule } from '../jwt/jwt.module';

@Module({
  controllers: [UserController],
  imports: [PrismaModule, BcryptModule, JwtModule],
  providers: [UserService, UserRepository],
})
export class UserModule {}
