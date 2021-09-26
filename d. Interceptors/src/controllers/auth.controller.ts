import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { RequestInterceptor } from 'src/interceptors/request.interceptor';
import { ResponseInterceptor } from 'src/interceptors/response.interceptor';
import { TimeoutInterceptor } from 'src/interceptors/timeout.interceptor';

@Controller('auth')
@UseInterceptors(TimeoutInterceptor, RequestInterceptor, ResponseInterceptor)
export class AuthController {

  @Post('login')
  doLogin(@Body() credentials: any){
    const {password, ...data} = credentials;
    return { ...data, authenticated: true }
  }

  @Post('background')
  async hardWork(@Body() data: any){
    const Sleep = (timeMs) => new Promise((resolve, _reject) => setTimeout(resolve, timeMs));
    await Sleep(2000);
    return { ...data, success: true }
  }

}
