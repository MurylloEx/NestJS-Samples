import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { AuthModule } from './microservices/modules/auth.module';
import { UsersModule } from './microservices/modules/users.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const authSvc = await NestFactory.createMicroservice<MicroserviceOptions>(AuthModule, {
    transport: Transport.TCP,
    options: { port: 4000 }
  });

  const usersSvc = await NestFactory.createMicroservice<MicroserviceOptions>(UsersModule, {
    transport: Transport.TCP,
    options: { port: 5000 }
  });

  await usersSvc.listen();
  await authSvc.listen();
  
  await app.listen(3000);
}
bootstrap();
