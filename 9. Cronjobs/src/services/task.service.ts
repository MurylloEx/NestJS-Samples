import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';

@Injectable()
export class TaskService {

  private log = new Logger(TaskService.name);

  @Cron('10 * * * * *')
  sendEmails(){
    this.log.log('[CRON] Enviando e-mail para os usuários do sistema...');
  }

  @Interval(5000)
  deleteInactiveUsers(){
    this.log.log('[INTERVAL] Excluindo usuários inativos do sistema...');
  }

  @Timeout(1000)
  deleteTempData(){
    this.log.log('[TIMEOUT] Apagando dados e arquivos temporários do serviço...');
  }

}
