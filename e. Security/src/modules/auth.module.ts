import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/services/auth.service';
import { UsersService } from 'src/services/users.service';
import { JwtStrategy } from 'src/services/jwt.strategy.service';
import { AuthController } from 'src/controllers/auth.controller';
import { JwtAuthProvider } from 'src/security/guards/jwt.auth.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: 's3cr3t',
      signOptions: { expiresIn: '7d' },
    })
  ],
  providers: [
    UsersService,
    AuthService,
    JwtStrategy, 
    JwtAuthProvider,
  ],
  controllers: [AuthController]
})
export class AuthModule {}
