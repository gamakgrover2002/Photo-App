/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SALT_ROUNDS } from 'src/utils/constants/constants';

@Injectable()
export class BcryptService {
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, SALT_ROUNDS);
  }

  async comparePasswords(plainText: string, hashed: string): Promise<boolean> {
    return await bcrypt.compare(plainText, hashed);
  }
}
