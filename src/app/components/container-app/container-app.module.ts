import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerAppRoutingModule } from './container-app-routing.module';
import { ContainerAppComponent } from './container-app.component';
import { MaterialModule } from '../../material.module';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';

@NgModule({
  imports: [ CommonModule, ContainerAppRoutingModule, MaterialModule],
  declarations: [ToolbarComponent, ContainerAppComponent ]
})
export class ContainerAppModule {}
