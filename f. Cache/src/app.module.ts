import { CacheModule, Module } from '@nestjs/common';
import { StreamerController } from './controllers/streamer.controller';

@Module({
  imports: [
    CacheModule.register({
      ttl: 10 //Tempo de vida de 10 segundos do Cache.
    })
  ],
  controllers: [StreamerController],
  providers: [],
})
export class AppModule {

}
