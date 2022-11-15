import { map } from 'rxjs/operators';
import { MarcaCarro } from './../../models/MarcaCarro';
import { Observable } from 'rxjs';
import { Seguro } from './../../models/Seguro';
import { Component, OnInit } from '@angular/core';
import { MarcaCarroService } from 'src/app/services/marca-carro.service';

@Component({
  selector: 'app-cadastro-seguro',
  templateUrl: './cadastro-seguro.component.html',
  styleUrls: ['./cadastro-seguro.component.css']
})
export class CadastroSeguroComponent implements OnInit {

  public seguro = new Seguro();
  public marcasCarro$: Observable<MarcaCarro[]> | undefined;

  constructor(
    private marcaCarroService: MarcaCarroService,
  ) {}

  ngOnInit(): void {
    this.marcasCarro$ = this.marcaCarroService.getMarcas();
  }

  adicionar() {}
  enviarNotificacao() {}

}
