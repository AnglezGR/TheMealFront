import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatilloDetailRoutingModule } from './platillo-detail-routing.module';
import { PlatilloDetailComponent } from './platillo-detail.component';
import { MaterialModule } from '../../../material.module';

@NgModule({
  declarations: [PlatilloDetailComponent],
  imports: [CommonModule, PlatilloDetailRoutingModule, MaterialModule]
})
export class PlatilloDetailModule { }
