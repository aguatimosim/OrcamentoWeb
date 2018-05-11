import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Despesa } from './despesa';
import { TipoDeDespesa } from './tipodedespesa';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const despesas: Despesa[] = [
      { id: 1, tipo: 1, dataPagto: new Date('01-15-2018'), descricao: 'Telefone', valor: 45 }, 
      { id: 2, tipo: 2, dataPagto: new Date('02-15-2018'), descricao: 'Osteopata Luiz', valor: 260 }, 
      { id: 3, tipo: 3, dataPagto: new Date('03-15-2018'), descricao: 'Bicicleta Raul', valor: 120, codCartaoCredito: 1 }, 
      { id: 4, tipo: 4, dataPagto: new Date('04-15-2018'), descricao: 'Almoço BH', valor: 93, codCartaoCredito: 3 },
      { id: 5, tipo: 5, dataPagto: new Date('05-15-2018'), descricao: 'Academia', valor: 100 }, 
      { id: 6, tipo: 6, dataPagto: new Date('06-15-2018'), descricao: 'Embreagem Pálio', valor: 320 }, 
      { id: 7, tipo: 7, dataPagto: new Date('07-15-2018'), descricao: 'Buteco com Laís', valor: 36, codCartaoCredito: 1 }, 
      { id: 8, tipo: 8, dataPagto: new Date('08-15-2018'), descricao: 'Vinhos', valor: 350, codCartaoCredito: 2 }, 
      { id: 9, tipo: 9, dataPagto: new Date('09-15-2018'), descricao: 'Doações mensais - todas', valor: 200 }, 
      { id: 10, tipo: 10, dataPagto: new Date('10-15-2018'), descricao: 'Recebto Honorários Gerson', valor: -420 }, 
      { id: 11, tipo: 11, dataPagto: new Date('11-15-2018'), descricao: 'Mensal Ana', valor: 2440 } 
    ];
    
    const tiposdespesa: TipoDeDespesa[] = [
      { codigo: 3, descricao: 'Dudu, Nando e Raul' },
      { codigo: 7, descricao: 'Lazer meu' },
      { codigo: 14, descricao: 'Vinda meninos Rio' },
      { codigo: 15, descricao: 'Viagens' }
    ];
    
    // TODO - Retirar comentários quando conseguir retornar mais de um vetor
    const db = { despesas, tiposdespesa };    
    
    // return {db};
    
    return {despesas};
//  return {tiposdespesa};
  }
}
