import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth.module';
import { UsersService } from './services/users.service';
import { ProtectedController } from './controllers/protected.controller';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 5 * 60 * 1000,
      limit: 1024
    }),
    AuthModule
  ],
  controllers: [ProtectedController],
  providers: [UsersService],
})
export class AppModule {}
