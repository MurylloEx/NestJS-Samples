import { BadRequestException, Body, Controller, Inject, Post, UnauthorizedException } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Observable } from "rxjs";

@Controller('auth')
export class AuthController {

  constructor(
    @Inject('AUTH_SERVICE')
    private authService: ClientProxy){}

  toPromise<T>(obs: Observable<T>): Promise<T> {
    return new Promise((next, error) => obs.subscribe({ next, error }));
  }

  @Post('login')
  async doLogin(@Body() credential: any){
    let isValid = await this.toPromise(this.authService.send<boolean>('checkCredentials', credential));
    if (!isValid)
      throw new UnauthorizedException('Usuário ou senha incorretos!');

    let token = await this.toPromise(this.authService.send<any>('generateToken', credential?.name));
    if (!token)
      throw new BadRequestException('Nome de usuário mal-formado.');
    
    return { success: true, token }
  }

}
