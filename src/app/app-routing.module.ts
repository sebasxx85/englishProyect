import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Type1Component } from './components/type1/type1.component';
import { Type2Component } from './components/type2/type2.component';
import { Type3Component } from './components/type3/type3.component';
import { ResultComponent } from './components/result/result.component';

//Si son componentes stanalone se carga el componente si son tradicionales el modulo si uso Lazy Load
const routes: Routes = [
  // Ruta estática para el componente Home
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige la ruta raíz a /home
  { path: 'home', component: HomeComponent },
 
  //tipos de pruebas
  { path: 'type1', component: Type1Component },
  { path: 'type2', component: Type2Component },
  { path: 'type3', component: Type3Component },
  { path: 'result', component: ResultComponent },

  //Usando lazy load stanalone con componentes
  // {
  //   path: 'result', loadChildren: () =>
  //     import('./components/result/result.component').then(m => m.ResultComponent)
  // },
 
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
