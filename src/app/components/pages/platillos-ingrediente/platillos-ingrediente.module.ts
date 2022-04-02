import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatillosIngredienteRoutingModule } from './platillos-ingrediente.routing.module';
import { PlatillosIngredienteComponent } from './platillos-ingrediente.component';
import { MaterialModule } from '../../../material.module';

@NgModule({
  declarations: [PlatillosIngredienteComponent],
  imports: [CommonModule, PlatillosIngredienteRoutingModule, MaterialModule]
})
export class PlatillosIngredienteModule { }
