import { HttpHeaders } from '@angular/common/http';

export class Constantes {
  
  public static despesasURL = 'api/despesas';
  public static tiposDespURL = 'api/tiposdespesa';
  
  public static httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
