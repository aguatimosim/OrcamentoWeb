export class Despesa {

  constructor (
    public id: number,
    public tipo: number,
    public dataPagto: Date,
    public descricao: string,
    public valor: number,
    public codCartaoCredito?: number
    ) { }

}
