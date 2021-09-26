import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { Credential } from 'src/data/credential.data';
import { AuthService } from 'src/services/auth.service';
import { UsersService } from 'src/services/users.service';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
    private usersService: UsersService){}

  @Post('login')
  async doLogin(@Body() credential: Credential){
    if (!this.authService.checkCredentials(credential))
      throw new UnauthorizedException('Usuário ou senha incorretos, tente novamente.');

    let user = this.usersService.findByName(credential.name);

    return { token: await this.authService.buildToken(user) }
  }

}
