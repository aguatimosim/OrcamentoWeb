import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { TipoDeDespesa } from '../tipodedespesa';
import { Constantes } from '../constantes';
import { TIPOSDESPESA } from '../mockdespesas';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { MensagensService } from './mensagens.service';

@Injectable()
export class TipodespesaService {
  private handleError: HandleError;   // serviço padrão de tratamento de erros copiado do Angular / HTTPClient
  
  constructor(
    private mensagensService: MensagensService, 
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler)  {
      this.handleError = httpErrorHandler.createHandleError('TipodespesaService');
    }

  getTiposDespesa(): Observable<TipoDeDespesa[]>  {
    return of(TIPOSDESPESA);
    
//    return this.http.get<TipoDeDespesa[]>(Constantes.tiposDespURL)
//      .pipe(
//        catchError(this.handleError('getTiposDespesa', []))
//      );
  }
}
