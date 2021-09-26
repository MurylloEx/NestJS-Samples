import { Server, WebSocket } from 'ws';
import { OnGatewayConnection, OnGatewayDisconnect, WebSocketServer } from '@nestjs/websockets';
import { ConnectedSocket, MessageBody } from "@nestjs/websockets";
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway(8080)
export class WebSockGateway implements OnGatewayConnection, OnGatewayDisconnect {
  
  @WebSocketServer()
  server: Server;
  clients: WebSocket[] = [];
  
  handleConnection(client: WebSocket, ...args: any[]) {
    this.clients.push(client);
  }
  
  handleDisconnect(client: any) {
    let k = this.clients.indexOf(client);
    this.clients.splice(k, 1);
  }

  @SubscribeMessage('message')
  onMessage(@MessageBody() data: number[])
  {
    return data.reduce((a,b) => a+b);
  }

  @SubscribeMessage('broadcast')
  onBroadcast(@MessageBody() data: any)
  {
    this.clients.forEach(s => s.send(JSON.stringify(data)));
  }

}