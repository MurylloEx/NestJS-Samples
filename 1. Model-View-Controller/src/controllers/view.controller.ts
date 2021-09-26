import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class ViewController {

  @Get()
  @Render('index')
  helloWorld(){
    return {}
  }

}
