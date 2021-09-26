import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database.module';
import { MessagesModule } from './modules/messages.module';

@Module({
  imports: [
    DatabaseModule,
    MessagesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
