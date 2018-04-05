import { Despesa } from '../despesa';
import { TIPOSDESPESA } from '../mockdespesas';
import { TipoDeDespesa } from '../tipodedespesa';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-despesa-det',
  templateUrl: './despesa-det.component.html',
  styleUrls: ['./despesa-det.component.css']
})
export class DespesaDetComponent implements OnInit {

  @Input() despesa: Despesa;
  
  tiposDespesa: TipoDeDespesa[] = TIPOSDESPESA;
  
  constructor() { }

  ngOnInit() {
  }

}
