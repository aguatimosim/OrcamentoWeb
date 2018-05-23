import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

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
  despesas$: Observable<Despesa[]>;
  private termosPesquisa = new BehaviorSubject<string>('');  

  constructor(
    private router: Router,
    private despesaService: DespesaService, 
    private tipoDespesaService: TipodespesaService) { }

  ngOnInit() {
    // this.getDespesas();
    this.getTiposDespesa();
    this.despesas$ = this.termosPesquisa.pipe(
      debounceTime(500),
      distinctUntilChanged(),   // TODO - volta ao original do Tutorial se não chamar nenhum comando aqui 
      switchMap((palavra: string) => { 
        const despesas = this.despesaService.pesquisDespesa(palavra);
        return despesas;
      })
    );
    // TODO
    // console.log(this.termosPesquisa.getValue());
  }

  getDespesas(): void  {
    this.despesaService.getDespesas()
//    .subscribe(despesas => this.despesas = despesas);
      .subscribe(despesas => this.despesas$ = of(despesas.slice(0, 15)));
  }

  getTiposDespesa(): void  {
    this.tipoDespesaService.getTiposDespesa()
      .subscribe(tiposDespesa => this.tiposDespesa = tiposDespesa);
  }
  
  getDescTipo(tipoDesp: number) {
    const indice = this.tiposDespesa ? this.tiposDespesa.findIndex(tipoDespesa => tipoDespesa.codigo === tipoDesp) : -1;
    // TODO
    console.log('parâmetro Tipo de Despesa = ' + tipoDesp);
    return indice >= 0 ? this.tiposDespesa[indice].descricao : 'INDEFINIDO';
  }
  
  detalhe()  {
    this.router.navigate(['/detalhe/0']);
  }
  
  pesquisa(palavra: string): void {
    this.termosPesquisa.next(palavra);
  }
}
