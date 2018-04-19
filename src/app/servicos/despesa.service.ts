import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Despesa } from '../despesa';
import { DESPESAS } from '../mockdespesas';
import { MensagensService } from './mensagens.service';

@Injectable()
export class DespesaService {

  constructor(private mensagensService: MensagensService) { }

  getDespesas(): Observable<Despesa[]>  {
    // TODO - Substituir esta mensagem pela mensagem de erro quando encontrar problemas no acesso
    this.mensagensService.add('Despesas lidas'); 
    
    return of(DESPESAS);
  }
}
