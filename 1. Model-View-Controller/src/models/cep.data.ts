import { IsDefined, IsNumberString, Matches } from 'class-validator';

export class CepData {

  @IsDefined({ message: "O cep precisa ser especificado." })
  @IsNumberString()
  @Matches(/^[0-9]{8}$/, { message: "O Cep fornecido é inválido."})
  public cep?: string;

}