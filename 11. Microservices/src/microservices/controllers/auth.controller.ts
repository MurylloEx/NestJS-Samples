import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {

  constructor(private authService: AuthService){}

  @MessagePattern('checkCredentials')
  async checkCredentials(@Body() { name, password }){
    return await this.authService.checkCredentials(name, password);
  }

  @MessagePattern('generateToken')
  async generateToken(@Body() name: string){
    return await this.authService.generateToken(name);
  }
  
}
