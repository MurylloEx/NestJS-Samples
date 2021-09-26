import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength, validateOrReject } from "class-validator";
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MessageModel {

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  public id?: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(64)
  @MinLength(4)
  @Column()
  public title?: string;

  @ApiProperty()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(256)
  @MinLength(1)
  @Column()
  public body?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Column()
  public authorName?: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  @Column()
  public authorEmail?: string;

  @BeforeInsert()
  @BeforeUpdate()
  async validate(){
    await validateOrReject(this);
  }

}