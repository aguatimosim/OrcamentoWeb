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
    
    // return of(DESPESAS);
    
    return this.http.get<Despesa[]>(Constantes.despesasURL)
      .pipe(
        tap(despesas => this.mensagensService.add('Despesas lidas - Primeira: ' + despesas[0].descricao)),
        catchError(this.handleError('getDespesas', []))
      );
  }
  
  getDespesa(id: number): Observable<Despesa>  {
    
    const url = Constantes.despesasURL + '/' + id;
    return this.http.get<Despesa>(url)
      .pipe(
        tap(despesa => this.mensagensService.add('Despesa lida com id = ' + despesa.id)),
        catchError(this.handleError<Despesa>('getDespesa id = ' + id))
      );
  }
  
  updateDespesa(despesa: Despesa): Observable<any>  {
    
    return this.http.put<Despesa>(Constantes.despesasURL, despesa, Constantes.httpOptions)
      .pipe(
        tap(() => this.mensagensService.add('Despesa gravada com id = ' + despesa.id)),
        catchError(this.handleError<any>('updateDespesa'))
      );
  }

  incluiDespesa(despesa: Despesa): Observable<Despesa>  {
    
    return this.http.post<Despesa>(Constantes.despesasURL, despesa, Constantes.httpOptions)
      .pipe(
        tap(despesa => this.mensagensService.add('Despesa incluída com id = ' + despesa.id)),
        catchError(this.handleError<Despesa>('incluiDespesa'))
      );
  }
  
  excluiDespesa(id: number): Observable<any>  {
    
    const url = Constantes.despesasURL + '/' + id;
    return this.http.delete(url, Constantes.httpOptions)
      .pipe(
        tap(() => this.mensagensService.add('Despesa excluída com id = ' + id)),
        catchError(this.handleError<any>('excluiDespesa id = ' + id))
      );
  }

  pesquisDespesa(palavra: string): Observable<Despesa[]>  {
    
    if (!palavra.trim()) {
      return this.getDespesas();
    }
    const url = Constantes.despesasURL + '/?descricao=' + palavra;
    return this.http.get<Despesa[]>(url)
      .pipe(
        tap(despesa => {
          this.mensagensService.add('Despesas correspondentes a = ' + palavra);
          // TODO
          console.log(JSON.stringify(despesa));
        }),
        catchError(this.handleError<Despesa[]>('pesquisDespesa = ' + palavra))
      );
  }
  
}
