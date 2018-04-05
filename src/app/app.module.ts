import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DespesasComponent } from './despesas/despesas.component';
import { DespesaDetComponent } from './despesa-det/despesa-det.component';


@NgModule({
  declarations: [
    AppComponent,
    DespesasComponent,
    DespesaDetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
