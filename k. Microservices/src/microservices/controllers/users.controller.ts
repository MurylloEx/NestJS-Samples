import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from '../services/users.service';

@Controller()
export class UsersController {

  constructor(private userService: UsersService){}

  @MessagePattern('getAll')
  getAll(data: any){
    return this.userService.getAll();
  }

  @MessagePattern('findByName')
  findByName(name: string){
    return this.userService.findByName(name) || {};
  }

}
