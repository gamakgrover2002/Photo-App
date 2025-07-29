import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { UserType } from 'src/utils/types/types';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  async getUser() {}
  async createUser(registerBody): Promise<UserType> {
    try {
      const newUser = await this.prismaClient.user.create({
        data: registerBody,
      });
      return newUser;
    } catch (err) {
      throw new Error(err as string);
    }
  }
  async getUserData(id: string): Promise<UserType> {
    try {
      const user = await this.prismaClient.user.findUnique({
        select: {
          email: true,
          firstName: true,
          lastName: true,
          profileImage: true,
          posts: true,
        },
        where: {
          id: id,
        },
      });
      return user as UserType;
    } catch (err) {
      throw new Error(err as string);
    }
  }
  async validateUser(email, password) {
    const user = await this.prismaClient.user.findFirst({
      where: {
        AND: [{ email: email }, { password: password }],
      },
      select: {
        email: true,
      },
    });
    return user;
  }
}
