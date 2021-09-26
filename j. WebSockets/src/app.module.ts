import { Module } from '@nestjs/common';
import { WebSockGateway } from './gateways/websocket.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [WebSockGateway],
})
export class AppModule {}
