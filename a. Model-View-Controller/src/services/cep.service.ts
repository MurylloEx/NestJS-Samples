import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class CepService {

  constructor(
    private http: HttpService){}

  toPromise<T>(obs: Observable<T>): Promise<T> {
    return new Promise((next, error) => obs.subscribe({ next, error }));
  }

  async queryCep(cep: string){
    const requestUrl = 'https://viacep.com.br/ws/' + encodeURIComponent(cep) + '/json/';
    let response = await this.toPromise(this.http.get(requestUrl));
    if (response.status == 200)
      return response.data;
    return {erro: true};
  }

}
