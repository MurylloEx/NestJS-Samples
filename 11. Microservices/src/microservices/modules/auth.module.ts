import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "../services/auth.service";
import { AuthController } from "../controllers/auth.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      { name: 'USERS_SERVICE', transport: Transport.TCP, options: { port: 5000 } }
    ]),
    JwtModule.register({
      secret: 's3cr3t'
    })
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}

