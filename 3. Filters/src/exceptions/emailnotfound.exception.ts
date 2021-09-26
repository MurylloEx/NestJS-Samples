import { HttpException } from "@nestjs/common";

export class EmailNotFoundException extends HttpException {

  constructor(response?: string | Record<string, any>, status?: number){
    super(
      response || 'O endereço de e-mail fornecido é inválido ou inexistente.', 
      status || 404);
  }

}