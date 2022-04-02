import { AuthGuard } from '../../shared/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerAppComponent } from './container-app.component';


const routes: Routes = [
  {
    path: '',
    component: ContainerAppComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pages/bienvenida/bienvenida.module').then(m => m.BienvenidaModule)
      },
      {
        path: 'bienvenida',
        loadChildren: () =>
          import('../pages/bienvenida/bienvenida.module').then(m => m.BienvenidaModule)
      },
      {
        path: 'ingredientes',
        loadChildren: () =>
          import('../pages/ingredientes/ingredientes.module').then(m => m.IngredientesModule)
      },
      {
        path: 'ingrediente-platillos/:ingrediente',
        loadChildren: () =>
          import('../pages/platillos-ingrediente/platillos-ingrediente.module').then(m => m.PlatillosIngredienteModule)
      },
      {
        path: 'platillos',
        loadChildren: () =>
          import('../pages/platillos/platillos.module').then(m => m.PlatillosModule)
      },
      {
        path: 'platillo-detail/:id',
        loadChildren: () =>
          import('../pages/platillo-detail/platillo-detail.module').then(m => m.PlatilloDetailModule)
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('../pages/perfil/perfil.module').then(m => m.PerfilModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerAppRoutingModule { }
