import { Module } from '@nestjs/common';
import { CepController } from './controllers/cep.controller';
import { CepService } from './services/cep.service';
import { ViewController } from './controllers/view.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CepController, ViewController],
  providers: [CepService],
})
export class AppModule {}
