import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Type1Component } from './components/EnglishType/type1/type1.component';
import { Type2Component } from './components/EnglishType/type2/type2.component';
import { Type3Component } from './components/EnglishType/type3/type3.component';
import { ResultComponent } from './components/result/result.component';
import { TableErrorsComponent } from './table-errors/table-errors.component';
import { Type1ItaComponent } from './components/ItalianType/type1-ita/type1-ita.component';
import { Type1PorComponent } from './components/PortuguesType/type1-por/type1-por.component';
import { EjercicioComponent } from './components/ejercicio/ejercicio.component';
import { UserComponent } from './components/user/user.component';

//Si son componentes stanalone se carga el componente si son tradicionales el modulo si uso Lazy Load
const routes: Routes = [
  // Ruta estática para el componente Home
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige la ruta raíz a /home
  { path: 'home', component: HomeComponent },
  { path: 'table-errors', component: TableErrorsComponent },
  { path: 'ingresar', component:  UserComponent },

 
 
  // Nueva ruta única para todos los ejercicios
  { path: 'ejercicio', component: EjercicioComponent }, // Componente contenedor

  //Resultado
  { path: 'result', component: ResultComponent },

  //Usando lazy load stanalone con componentes
  // {
  //   path: 'result', loadChildren: () =>
  //     import('./components/result/result.component').then(m => m.ResultComponent)
  // },
 
  //Usando lazy load tradicional con modulos
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
