/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  async generateToken<G>(data: G) {
    const token = await jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: data,
      },
      'secret',
    );
    return token;
  }
}
