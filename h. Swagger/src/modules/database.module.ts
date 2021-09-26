import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MessageModel } from "src/models/message.model";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'sqlite',
      database: 'database/db.sqlite',
      logging: true,
      synchronize: true,
      entities: [MessageModel]
    })
  ]
})
export class DatabaseModule {}
