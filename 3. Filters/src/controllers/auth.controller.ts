import { Body, Controller, Post } from "@nestjs/common";
import { CredentialData } from "src/data/credential.data";
import { AuthService } from "src/services/auth.service";

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService){}

  @Post('login')
  doLogin(@Body() credentials: CredentialData){
    return this.authService.validateLogin(credentials);
  }

}
