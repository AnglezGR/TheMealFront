import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatillosIngredienteComponent } from './platillos-ingrediente.component';

const routes: Routes = [{ path: '', component: PlatillosIngredienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatillosIngredienteRoutingModule { }
