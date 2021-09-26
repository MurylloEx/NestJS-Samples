import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Credential } from 'src/data/credential.data';
import { UserModel } from 'src/models/user.model';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {

  constructor(
    private jwtService: JwtService,
    private usersService: UsersService){}

  public checkCredentials({ name, password }: Credential){
    let user = this.usersService.findByName(name);
    return (!!user && (user?.password == password));
  } 

  public async buildToken({id, name, role}: UserModel){
    return await this.jwtService.signAsync({id, name, role});
  }

}
