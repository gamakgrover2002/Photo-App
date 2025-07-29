import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

import { BcryptService } from 'src/modules/bcrypt/bcrypt.service';
@Injectable()
export class HashPasswordInterceptor implements NestInterceptor {
  constructor(private readonly bcryptService: BcryptService) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Promise<Observable<any>> {
    const request: { body: { password: string } } = context
      .switchToHttp()
      .getRequest();
    if (request.body?.password) {
      request.body.password = await this.bcryptService.hashPassword(
        request.body.password,
      );
    }
    return next.handle();
  }
}
