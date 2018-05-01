import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DespesasComponent } from './despesas/despesas.component';
import { DespesaDetComponent } from './despesa-det/despesa-det.component';
import { MensagensComponent } from './mensagens/mensagens.component';

const routes: Routes = [
  { path: 'despesas', component: DespesasComponent  },
  { path: 'detalhado', component: MensagensComponent  },
  { path: 'detalhe/:id', component: DespesaDetComponent  },
  { path: '', redirectTo: '/despesas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
