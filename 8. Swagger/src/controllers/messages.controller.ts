import { Body, Controller, Get, Param, Patch, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiExcludeEndpoint, ApiTags } from "@nestjs/swagger";
import { AuthorData } from "src/data/author.data";
import { MessageModel } from "src/models/message.model";
import { MessageService } from "src/services/message.service";

@ApiTags('messages')
@Controller('messages')
@UsePipes(new ValidationPipe({ transform: true }))
export class MessagesController {

  constructor(private messageService: MessageService){}

  @Get()
  async getAllMessages(){
    return await this.messageService.fetchAll();
  }

  @Post()
  async createMessage(@Body() message: MessageModel){
    return await this.messageService.create(message);
  }

  @Put(':messageId/author')
  async updateAuthor(@Param('messageId') messageId: string, @Body() author: AuthorData){
    return await this.messageService.updateAuthor(messageId, author);
  }

  @ApiExcludeEndpoint()
  @Patch('secret')
  secretRoute(@Body() data: any){
    return data;
  }

}