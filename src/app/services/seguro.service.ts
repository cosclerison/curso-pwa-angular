import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seguro } from '../models/Seguro';
import { OnlineOfflineService } from './online-offline.service';
import Dexie  from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {

  private API_SEGUROS = 'http://localhost:9000/';
  private db: Dexie | undefined;
  private table: Dexie.Table<Seguro, any> | undefined;

  constructor(
    private http: HttpClient,
    private onlineOfflineService: OnlineOfflineService
  ) {
    this.ouvirStatusConexao();
    this.iniciarIndexDb();
  }

  private iniciarIndexDb() {
    this.db = new Dexie('db-seguros');
    this.db.version(1).stores({
      seguro: 'id'
    });
    this.table = this.db.table('seguro')
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

  private async salvarIndexDb(seguro: Seguro) {
    try {
      await this.table?.add(seguro);
      const todosSeguros = await this.table?.toArray();
      console.log('Seguro foi salvo no IndexDB', todosSeguros);
    } catch (error) {
      console.log('Erro ao incluir no IndexDB', error);
    }
  }

  private async enviarIndexDbParaApi() {
    const todosSeguros: any = await this.table?.toArray();

    for(const seguro of todosSeguros) {
      this.salvarAPI(seguro);
      await this.table?.delete(seguro.id);
      console.log(`Seguro com o id ${seguro.id} foi removido com sucesso`);
    }
  }

  cadastrar(seguro: Seguro) {
    if(this.onlineOfflineService.isOnline) {
      this.salvarAPI(seguro)
    } else {
      this.salvarIndexDb(seguro);
    }
  }

  listar(): Observable<Seguro[]> {
    return this.http.get<Seguro[]>(this.API_SEGUROS + 'api/seguros');
  }

  private ouvirStatusConexao() {
    this.onlineOfflineService.statusConexao
    .subscribe(online => {
      if(online) {
        this.enviarIndexDbParaApi();
        console.log('Enviando dados do meu banco local para API');
      } else {
        console.log('Estou Off-Line');
      }
    })
  }
}

