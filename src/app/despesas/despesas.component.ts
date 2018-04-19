import { Component, OnInit } from '@angular/core';

import { Despesa } from '../despesa';
import { TipoDeDespesa } from '../tipodedespesa';
import { DespesaService } from '../servicos/despesa.service';
import { TipodespesaService } from '../servicos/tipodespesa.service';

@Component({
  selector: 'app-despesaform',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit {
  
  // despesa = new Despesa(1, 2, new Date('01-15-2018'), 'Despesa de Teste', 50);
  despesas: Despesa[];
  tiposDespesa: TipoDeDespesa[];

  despesaSel: Despesa;
    
  onClick(despesa: Despesa): void  {
    this.despesaSel = despesa;
  }
  
  constructor(private despesaService: DespesaService, private tipoDespesaService: TipodespesaService) { }

  ngOnInit() {
    this.getDespesas();
    this.getTiposDespesa();
  }

  getDespesas(): void  {
    this.despesaService.getDespesas()
      .subscribe(despesas => this.despesas = despesas);
  }

  getTiposDespesa(): void  {
    this.tipoDespesaService.getTiposDespesa()
      .subscribe(tiposDespesa => this.tiposDespesa = tiposDespesa);
  }
  
  getDescTipo(tipoDesp: number) {
    const indice = this.tiposDespesa.findIndex(tipoDespesa => tipoDespesa.codigo === tipoDesp);
    // TODO
    console.log('parâmetro Tipo de Despesa = ' + tipoDesp);
    return indice >= 0 ? this.tiposDespesa[indice].descricao : 'INDEFINIDO';
  }
}
