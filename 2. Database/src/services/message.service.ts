import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthorData } from "src/data/author.data";
import { MessageModel } from "src/models/message.model";
import { Repository } from "typeorm";

@Injectable()
export class MessageService {

  constructor(
    @InjectRepository(MessageModel)
    private Messages: Repository<MessageModel>){}

  async create(message: MessageModel){
    return await this.Messages.save(message);
  }

  async fetchAll(){
    return await this.Messages.find();
  }

  async updateAuthor(id: string, author: AuthorData){
    let foundMessage = await this.Messages.findOne({id});
    if (!foundMessage)
      throw new NotFoundException();
    foundMessage.authorEmail = author.email;
    foundMessage.authorName = author.name;
    await this.Messages.update(id, foundMessage);
    return foundMessage;
  }

}