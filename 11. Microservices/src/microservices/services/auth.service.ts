import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { UserModel } from '../models/user.model';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {

  constructor(
    @Inject('USERS_SERVICE')
    private usersService: ClientProxy,
    private jwtService: JwtService) {}

  toPromise<T>(obs: Observable<T>): Promise<T> {
    return new Promise((next, error) => obs.subscribe({ next, error }));
  }
  
  async checkCredentials(name: string, password: string) {
    let user = await this.toPromise(this.usersService.send<UserModel>('findByName', name));
    return (!!user && (user?.password == password));
  }

  async generateToken(name: string){
    let {password, ...user} = await this.toPromise(
      this.usersService.send<UserModel>('findByName', name));

    return this.jwtService.sign(user);
  }

}
