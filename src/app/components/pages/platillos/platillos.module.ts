import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatillosRoutingModule } from './platillos-routing.module';
import { PlatillosComponent } from './platillos.component';
import { MaterialModule } from '../../../material.module';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [PlatillosComponent],
  imports: [CommonModule, PlatillosRoutingModule, MaterialModule,FormsModule]
})
export class PlatillosModule { }
