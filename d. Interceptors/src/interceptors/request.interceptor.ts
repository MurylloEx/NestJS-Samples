import { BadRequestException, CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements NestInterceptor {

  private log = new Logger(RequestInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const body = request.body;

    this.log.log('Uma requisição chegou ao servidor! ' + request.path);

    if (request.path.startsWith('/auth/login'))
      if (body?.password.length < 6)
        throw new BadRequestException('Sua senha é muito pequena!');

    this.log.log('O corpo da requisição está descrito a seguir:');
    this.log.debug(request.body);

    return next.handle();
  }

}
