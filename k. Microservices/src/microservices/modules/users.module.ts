import { Module } from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { UsersController } from "../controllers/users.controller";

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
