import { Despesa } from './despesa';

export const DESPESAS: Despesa[] = [
    { id: 1, tipo: 1, dataPagto: new Date('01-15-2018'), descricao: 'Telefone', valor: 45 }, 
    { id: 2, tipo: 2, dataPagto: new Date('02-15-2018'), descricao: 'Osteopata Luiz', valor: 260 }, 
    { id: 3, tipo: 3, dataPagto: new Date('03-15-2018'), descricao: 'Bicicleta Raul', valor: 120, codCartaoCredito: 1 }, 
    { id: 4, tipo: 4, dataPagto: new Date('04-15-2018'), descricao: 'Almo�o BH', valor: 93, codCartaoCredito: 3 },
    { id: 5, tipo: 5, dataPagto: new Date('05-15-2018'), descricao: 'Academia', valor: 100 }, 
    { id: 6, tipo: 6, dataPagto: new Date('06-15-2018'), descricao: 'Embreagem P�lio', valor: 320 }, 
    { id: 7, tipo: 7, dataPagto: new Date('07-15-2018'), descricao: 'Buteco com La�s', valor: 36, codCartaoCredito: 1 }, 
    { id: 8, tipo: 8, dataPagto: new Date('08-15-2018'), descricao: 'Vinhos', valor: 350, codCartaoCredito: 2 }, 
    { id: 9, tipo: 9, dataPagto: new Date('09-15-2018'), descricao: 'Doa�es mensais - todas', valor: 200 }, 
    { id: 10, tipo: 10, dataPagto: new Date('10-15-2018'), descricao: 'Recebto Honor�rios Gerson', valor: -420 }, 
    { id: 11, tipo: 11, dataPagto: new Date('11-15-2018'), descricao: 'Mensal Ana', valor: 2440 } 
  ];
