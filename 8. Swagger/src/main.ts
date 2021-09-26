import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

function setupSwagger(app: INestApplication){
  const config = new DocumentBuilder()
    .setTitle('Título da documentação...')
    .setDescription('Exemplo de descrição da documentação...')
    .setVersion('1.0')
    .addTag('techday, api, nestjs')
    .build();
  SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, config));
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
