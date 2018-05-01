import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Despesa } from '../despesa';
import { TIPOSDESPESA } from '../mockdespesas';
import { DespesaService } from '../servicos/despesa.service';
import { TipoDeDespesa } from '../tipodedespesa';

@Component({
  selector: 'app-despesa-det',
  templateUrl: './despesa-det.component.html',
  styleUrls: ['./despesa-det.component.css']
})
export class DespesaDetComponent implements OnInit {
  @Input() despesa: Despesa;
  
  tiposDespesa: TipoDeDespesa[] = TIPOSDESPESA;
  
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private despesaService: DespesaService)   { }

  ngOnInit() {
    this.getDespesa();
  }

  getDespesa(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.despesaService.getDespesa(id)
      .subscribe(despesa => this.despesa = despesa);
  }

  onSubmit(despesaForm) {
    // TODO - chamar aqui a grava��o antes de limpar o FORM
    despesaForm.reset();
  }
  
  onVoltar() {
    this.location.back();
  }
}
