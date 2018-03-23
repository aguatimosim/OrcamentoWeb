import { Despesa } from '../despesa';
import { DESPESAS } from '../mockdespesas';
import { TipoDeDespesa } from '../tipodedespesa';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despesaform',
  templateUrl: './despesaform.component.html',
  styleUrls: ['./despesaform.component.css']
})
export class DespesaformComponent implements OnInit {
  
  tipoDespesa: TipoDeDespesa[] = [
    { codigo: 6, descricao: 'Dudu, Nando e Raul' },
    { codigo: 7, descricao: 'Lazer meu' },
    { codigo: 14, descricao: 'Vinda meninos Rio' },
    { codigo: 15, descricao: 'Viagens' }
  ];
  
  despesa = new Despesa(1, 2, new Date('01-15-2018'), 'Despesa de Teste', 50);
  despesas = DESPESAS;
  
  // TODO - ver se mantenho
  submetido = false;

  onSubmit() { this.submetido = true; }
    
  constructor() { }

  ngOnInit() {
  }

}
