import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context
      .switchToHttp()
      .getRequest<{ body: { role: string; token: string } }>();
    const body = request.body;
    return body.role in ['admin', 'user'] && body.token ? true : false;
  }
}
