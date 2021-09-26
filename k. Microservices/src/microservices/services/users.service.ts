import { Injectable } from '@nestjs/common';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersService {

  private Users: UserModel[] = [
    { id: '00b40834-59a1-4c91-94d5-b465b4c33bcb', name: 'Muryllo', password: 'p@ss',      role: 1 },
    { id: '7b2ea4df-946f-440c-806b-67bc1c179911', name: 'Ana',     password: 'aninha123', role: 2 },
    { id: '1bf77ee7-48c8-4519-b337-02ade41df7a2', name: 'Caio',    password: 'c@10',      role: 2 },
    { id: '6a9d50e8-2e00-48f8-a4a3-8698690074f3', name: 'Pedro',   password: 'p3dr0',     role: 7 }
  ];

  findByName(name: string){
    let [user] = this.Users.filter(u => u.name == name);
    return user;
  }

  getAll(){
    return this.Users.map(({password, ...u}) => u);
  }

}
