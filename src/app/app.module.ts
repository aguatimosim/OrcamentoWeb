import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { DespesasComponent } from './despesas/despesas.component';
import { DespesaDetComponent } from './despesa-det/despesa-det.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { DespesaService } from './servicos/despesa.service';
import { TipodespesaService } from './servicos/tipodespesa.service';
import { MensagensService } from './servicos/mensagens.service';
import { AppRoutingModule } from './app-routing.module';
import { InMemoryDataService } from './inmemorydataservice';
import { environment } from '../environments/environment';
import { HttpErrorHandler } from './servicos/http-error-handler.service';


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
    AppRoutingModule,
    HttpClientModule,
    // TODO The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    environment.production ?
    [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    DespesaService,
    TipodespesaService,
    MensagensService,
    HttpErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
