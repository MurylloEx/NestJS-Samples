import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { FileController } from './controllers/file.controller';

@Module({
  imports: [MulterModule.register({
    dest: './wwwroot'
  })],
  controllers: [FileController],
  providers: [],
})
export class AppModule {}
