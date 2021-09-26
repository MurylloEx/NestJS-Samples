import { HttpException } from "@nestjs/common";

export class WrongPasswordException extends HttpException {

  constructor(response?: string | Record<string, any>, status?: number){
    super(
      response || 'A senha fornecida está incorreta, verifique a senha e tente novamente.',
      status || 401);
  }

}