import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MessagesController } from "src/controllers/messages.controller";
import { MessageModel } from "src/models/message.model";
import { MessageService } from "src/services/message.service";

@Module({
  imports: [TypeOrmModule.forFeature([MessageModel])],
  providers: [MessageService],
  controllers: [MessagesController],
  exports: [MessageService]
})
export class MessagesModule {}
