import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Despesa } from '../despesa';
import { DespesaService } from '../servicos/despesa.service';
import { TipodespesaService } from '../servicos/tipodespesa.service';
import { TipoDeDespesa } from '../tipodedespesa';

@Component({
  selector: 'app-despesa-det',
  templateUrl: './despesa-det.component.html',
  styleUrls: ['./despesa-det.component.css']
})
export class DespesaDetComponent implements OnInit {
  @Input() despesa: Despesa = new Despesa(null, null, null, null, null, null);
  
  tiposDespesa: TipoDeDespesa[];
  id: number; 
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private despesaService: DespesaService,
    private tipoDespesaService: TipodespesaService)   { }

  ngOnInit() {
    this.getDespesa();
    this.getTiposDespesa();
  }

  getDespesa(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    
    if (this.id > 0) {     // Não lê despesa caso seja Nova Despesa
      this.despesaService.getDespesa(this.id)
        .subscribe(despesa => this.despesa = despesa);
    }
  }

  getTiposDespesa(): void  {
    this.tipoDespesaService.getTiposDespesa()
      .subscribe(tiposDespesa => this.tiposDespesa = tiposDespesa);
  }
  
  onSubmit(despesaForm): void {
    if (this.id > 0) {
      this.updateDespesa();
    } else {
      this.gravaDespesa();
    }
  }
  
  updateDespesa(): void {
    this.despesaService.updateDespesa(this.despesa)
      .subscribe(() => this.onVoltar());
  }
  
  gravaDespesa(): void {
    this.despesaService.incluiDespesa(this.despesa)
      .subscribe(() => this.onVoltar());
  }
  
  excluiDespesa(): void {
    this.despesaService.excluiDespesa(this.despesa.id)
      .subscribe(() => this.onVoltar());
  }
  
  onVoltar() {
    this.location.back();
  }
}
