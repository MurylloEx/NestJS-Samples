import { Request, Response } from 'express';
import { ArgumentsHost, Catch } from '@nestjs/common';
import { ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class GenericExceptionFilter implements ExceptionFilter {

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const statusCode = exception.getStatus();

    response.status(statusCode).json({
      error: true,
      timestamp: +new Date,
      data: exception.getResponse(),
      path: request.path,
      statusCode
    });
  }

}
