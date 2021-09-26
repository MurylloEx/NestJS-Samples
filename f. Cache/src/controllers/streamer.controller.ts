import { Controller, Get, Logger, UseInterceptors } from "@nestjs/common";
import { StreamerCacheInterceptor } from "src/interceptors/streamer-cache.interceptor";

@Controller('streamer')
@UseInterceptors(StreamerCacheInterceptor)
export class StreamerController {

  private log = new Logger(StreamerController.name);

  @Get()
  fetchLargeBlob(){
    this.log.warn('Retornando 50 MB em dados do servidor...');
    return '\x00'.repeat(50 * 1024 * 1024); //50 MB
  }

}