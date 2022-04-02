import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './shared';

const routes: Routes = [
    {
      path: 'login',
      loadChildren: () =>
        import('./components/auth/login/login.module').then(m => m.LoginModule)
    },
    {
      path: '',
      loadChildren: () =>
        import('./components/container-app/container-app.module').then(m => m.ContainerAppModule)
    },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
