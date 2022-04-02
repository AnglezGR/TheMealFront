import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatilloDetailComponent } from './platillo-detail.component';

const routes: Routes = [{ path: '', component: PlatilloDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatilloDetailRoutingModule { }
