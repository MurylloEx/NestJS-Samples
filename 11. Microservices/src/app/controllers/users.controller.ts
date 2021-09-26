import { Controller, Get, Inject } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { UserModel } from "src/microservices/models/user.model";

@Controller('users')
export class UsersController {

  constructor(
    @Inject('USERS_SERVICE')
    private usersService: ClientProxy){}

  toPromise<T>(obs: Observable<T>): Promise<T> {
    return new Promise((next, error) => obs.subscribe({ next, error }));
  }

  @Get()
  async getAll() {
    return await this.toPromise(this.usersService.send<UserModel[]>('getAll', {}));
  }

}
