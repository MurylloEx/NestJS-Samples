import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CepData } from 'src/models/cep.data';
import { CepService } from 'src/services/cep.service';

@Controller('cep')
@UsePipes(new ValidationPipe({ transform: true }))
export class CepController {

  constructor(private cepService: CepService){}

  @Post()
  async queryCep(@Body() cepData: CepData){
    return await this.cepService.queryCep(cepData.cep);
  }

}
