import { Despesa } from '../despesa';
import { DESPESAS, TIPOSDESPESA } from '../mockdespesas';
import { TipoDeDespesa } from '../tipodedespesa';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despesaform',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit {
  
  // despesa = new Despesa(1, 2, new Date('01-15-2018'), 'Despesa de Teste', 50);
  despesas = DESPESAS;
  tiposDespesa: TipoDeDespesa[] = TIPOSDESPESA;
    
  despesaSel: Despesa;
  
  onClick(despesa: Despesa): void  {
    this.despesaSel = despesa;
  }
  
  // TODO - ver se mantenho
  submetido = false;

  onSubmit() { this.submetido = true; }
    
  constructor() { }

  ngOnInit() {
  }

  getDescTipo(tipoDesp: number) {
    const indice = this.tiposDespesa.findIndex(tipoDespesa => tipoDespesa.codigo === tipoDesp);
    // TODO
    console.log('parâmetro Tipo de Despesa = ' + tipoDesp);
    return indice >= 0 ? this.tiposDespesa[indice].descricao : 'INDEFINIDO';
  }
}
