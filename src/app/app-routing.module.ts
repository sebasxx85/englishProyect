import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';
import { TableErrorsComponent } from './components/table-errors/table-errors.component';
import { EjercicioComponent } from './components/ejercicio/ejercicio.component';
import { LoginComponent } from './components/user/login.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LibraryComponent } from './components/library/library.component';

//Si son componentes stanalone se carga el componente si son tradicionales el modulo si uso Lazy Load
const routes: Routes = [
  // Ruta estática para el componente Home
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige la ruta raíz a /home
  { path: 'home', component: HomeComponent },
  
  { path: 'table-errors', redirectTo: '/corrections', pathMatch: 'full' },
  { path: 'corrections', component: TableErrorsComponent },

  { path: 'ingresar', component:  LoginComponent },
  { path: 'cursos', component:  CursosComponent },
  { path: 'ranking', component:  RankingComponent },
  { path: 'library', component:  LibraryComponent },

  // Nueva ruta única para todos los ejercicios
  { path: 'ejercicios', component: EjercicioComponent }, // Componente contenedor

  //Resultado
  { path: 'result', component: ResultComponent },

  { path: 'dashboard', component: DashboardComponent },

  //Usando lazy load tradicional con modulos
  {
    path: 'ingresar', loadChildren: () =>
      import('./components/user/login.module').then(m => m.UserModule)
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
