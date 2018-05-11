import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Despesa } from '../despesa';
import { Constantes } from '../constantes';
import { DESPESAS } from '../mockdespesas';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { MensagensService } from './mensagens.service';

@Injectable()
export class DespesaService {
  private handleError: HandleError;   // serviço padrão de tratamento de erros copiado do Angular / HTTPClient
  
  constructor(
    private mensagensService: MensagensService, 
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler)  {
      this.handleError = httpErrorHandler.createHandleError('DespesaService');
    }

  getDespesas(): Observable<Despesa[]>  {
    // TODO - Retirar esta mensagem. Mensagem de erro de problemas no acesso já tratada no serviço
    this.mensagensService.add('Despesas lidas'); 
    
    // return of(DESPESAS);
    
    return this.http.get<Despesa[]>(Constantes.despesasURL)
      .pipe(
        catchError(this.handleError('getDespesas', []))
      );
  }
  
  getDespesa(id: number): Observable<Despesa>  {
    // TODO - Retirar esta mensagem. Mensagem de erro de problemas no acesso já tratada no serviço
    this.mensagensService.add('Despesa lida com id = ' + id);
     
    return of(DESPESAS.find(despesa => despesa.id === id));
  }
  
}
