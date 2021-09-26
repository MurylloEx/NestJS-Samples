import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class AuthorData {

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  public email?: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(64)
  public name?: string;

}