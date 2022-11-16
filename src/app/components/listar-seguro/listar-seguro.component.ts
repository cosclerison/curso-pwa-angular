import { Seguro } from './../../models/Seguro';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SeguroService } from 'src/app/services/seguro.service';

@Component({
  selector: 'app-listar-seguro',
  templateUrl: './listar-seguro.component.html',
  styleUrls: ['./listar-seguro.component.css']
})
export class ListarSeguroComponent implements OnInit {

  public seguros$?: Observable<Seguro[]>;

  constructor(
    private seguroService: SeguroService
  ) { }

  ngOnInit(): void {
    this.seguros$ = this.seguroService.listar();
  }


}
