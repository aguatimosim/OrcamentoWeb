import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { TIPOSDESPESA } from '../mockdespesas';
import { TipoDeDespesa } from '../tipodedespesa';

@Injectable()
export class TipodespesaService {

  constructor() { }

  getTiposDespesa(): Observable<TipoDeDespesa[]>  {
    return of (TIPOSDESPESA);
  }
}
