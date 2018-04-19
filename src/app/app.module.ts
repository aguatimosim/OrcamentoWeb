import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DespesasComponent } from './despesas/despesas.component';
import { DespesaDetComponent } from './despesa-det/despesa-det.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { DespesaService } from './servicos/despesa.service';
import { TipodespesaService } from './servicos/tipodespesa.service';
import { MensagensService } from './servicos/mensagens.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    DespesasComponent,
    DespesaDetComponent,
    MensagensComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    DespesaService,
    TipodespesaService,
    MensagensService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
