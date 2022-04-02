import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngredientesComponent } from './ingredientes.component';

const routes: Routes = [{ path: '', component: IngredientesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientesRoutingModule { }
