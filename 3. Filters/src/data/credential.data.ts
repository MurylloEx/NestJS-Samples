import { IsDefined, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CredentialData {

  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  public email?: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(32)
  public password?: string;

}