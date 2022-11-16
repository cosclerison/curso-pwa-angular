import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seguro } from '../models/Seguro';
import { OnlineOfflineService } from './online-offline.service';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {

  private API_SEGUROS = 'http://localhost:9000/';

  constructor(
    private http: HttpClient,
    private onlineOfflineService: OnlineOfflineService
  ) {
    this.ouvirStatusConexao();
  }

  private salvarAPI(seguro: Seguro) {
    this.http.post(this.API_SEGUROS + 'api/seguros', seguro)
    .subscribe(
      // primeiro parâmetro mostra o sucesso 
      () => alert('Seguro foi cadastrado com sucesso'),
      // segundo parâmetro mostra o erro
      (error) => console.log('Erro ao cadastrar seguro')
    )
  }

  cadastrar(seguro: Seguro) {
    if(this.onlineOfflineService.isOnline) {
      this.salvarAPI(seguro)
    } else {
      console.log("salvar seguro no banco local");
    }
  }

  listar(): Observable<Seguro[]> {
    return this.http.get<Seguro[]>(this.API_SEGUROS + 'api/seguros');
  }

  private ouvirStatusConexao() {
    this.onlineOfflineService.statusConexao
    .subscribe(online => {
      if(online) {
        console.log('Enviando dados do meu banco local para API');
      } else {
        console.log('Estou Off-Line');
      }
    })
  }
}

