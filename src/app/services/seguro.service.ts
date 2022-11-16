import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seguro } from '../models/Seguro';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {

  private API_SEGUROS = 'http://localhost:9000/';

  constructor(
    private http: HttpClient,
  ) { }

  cadastrar(seguro: Seguro) {
    this.http.post(this.API_SEGUROS + 'api/seguros', seguro)
    .subscribe(
      // primeiro parâmetro mostra o sucesso 
      () => alert('Seguro foi cadastrado com sucesso'),
      // segundo parâmetro mostra o erro
      (error) => console.log('Erro ao cadastrar seguro')
    )
  }

  listar(): Observable<Seguro[]> {
    return this.http.get<Seguro[]>(this.API_SEGUROS + 'api/seguros');
  }
}

