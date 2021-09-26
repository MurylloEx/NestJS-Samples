import { IsDefined, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class AuthorData {

  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  public email?: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(64)
  public name?: string;

}