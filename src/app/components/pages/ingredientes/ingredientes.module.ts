import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientesRoutingModule } from './ingredientes.routing.module';
import { IngredientesComponent } from './ingredientes.component';
import { MaterialModule } from '../../../material.module';

@NgModule({
  declarations: [IngredientesComponent],
  imports: [CommonModule, IngredientesRoutingModule, MaterialModule]
})
export class IngredientesModule { }
