import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

//Si son componentes stanalone se carga el componente si son tradicionales el modulo si uso Lazy Load
const routes: Routes = [
  // Ruta estática para el componente Home
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige la ruta raíz a /home
  { path: 'home', component: HomeComponent },

  //Usando lazy load stanalone con componentes
  {
    path: 'result', loadChildren: () =>
      import('./components/result/result.component').then(m => m.ResultComponent)
  },
  {
    path: 'select', loadChildren: () =>
      import('./components/select-level/select-level.component').then(m => m.SelectLevelComponent)
  },

  //Usando lazy load tradicional con modulos
  {
    path: 'top', loadChildren: () =>
      import('./components/top/top.module').then(m => m.TopModule)
  },
  {
    path: 'ingresar', loadChildren: () =>
      import('./components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'crear-usuario', loadChildren: () =>
      import('./components/crear-usuario/crear-usuario.module').then(m => m.CrearUsuarioModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
