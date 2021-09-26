import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './controllers/auth.controller';
import { UsersController } from './controllers/users.controller';


@Module({
  imports: [
    ClientsModule.register([
      { name: 'USERS_SERVICE', transport: Transport.TCP, options: { port: 5000 } },
      { name: 'AUTH_SERVICE', transport: Transport.TCP, options: { port: 4000 } },
    ]),
  ],
  controllers: [
    UsersController, 
    AuthController
  ]
})
export class AppModule {}
