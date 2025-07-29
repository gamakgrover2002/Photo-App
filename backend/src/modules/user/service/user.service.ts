import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repsoitory/user.repository';
import { UserType } from 'src/utils/types/types';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(registerBody): Promise<UserType> {
    return await this.userRepository.createUser(registerBody);
  }
  async getUser(id: string): Promise<UserType> {
    return await this.userRepository.getUserData(id);
  }
  async validateUser(email: string, password: string) {
    return await this.userRepository.validateUser(email, password);
  }
}
