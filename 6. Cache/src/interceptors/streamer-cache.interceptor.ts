import { CacheInterceptor, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class StreamerCacheInterceptor extends CacheInterceptor {
  
  trackBy(context: ExecutionContext): string | undefined {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    if (request.method != 'GET')
      return undefined;

    return request.path;
  }

}
