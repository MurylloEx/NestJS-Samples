import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TaskService } from './services/task.service';

@Module({
  imports: [ScheduleModule.forRoot()],
  controllers: [],
  providers: [TaskService],
})
export class AppModule {}
