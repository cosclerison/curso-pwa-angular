import { map } from 'rxjs/operators';
import { MarcaCarro } from './../models/MarcaCarro';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface CarResponse {
  Makes: Array<any>;
}

@Injectable({
  providedIn: 'root'
})
export class MarcaCarroService {

  private API_CARROS = 'https://www.carqueryapi.com/api/0.3/?callback=%3F&cmd=getMakes'

  constructor(
    private http: HttpClient
  ) { }

  private mapMarcas(marcas: any): MarcaCarro[] {
    return marcas.map((marca: any) => ({
      codigo: marca.make_id,
      nome: marca.make_display,
    }));
  }


  public getMarcas(): Observable<MarcaCarro[]> {
    return this.http.jsonp(this.API_CARROS, 'callback')
    .pipe(
      map((res: any) => this.mapMarcas(res.Makes))
    )
  }
}
