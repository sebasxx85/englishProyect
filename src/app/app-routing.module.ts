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
import { LibraryComponent } from './library/library.component';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  // Home -> /library
  { path: '', pathMatch: 'full', redirectTo: 'library' },
  {
    path: 'library',
    loadChildren: () => import('./library/library.module').then(m => m.LibraryModule)
  },

  // Ruta opcional para "home" que renderiza LibraryComponent directamente
  { path: 'home', component: LibraryComponent },

  // Otras rutas existentes
  { path: 'table-errors', redirectTo: '/corrections', pathMatch: 'full' },
  { path: 'corrections', component: TableErrorsComponent },

  { path: 'ingresar', component: LoginComponent }, // mantenemos la versión componente
  { path: 'practicar', component: HomeComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'ranking', component: RankingComponent },

  // Ejercicios
  { path: 'ejercicios', component: EjercicioComponent },

  // Resultado
  { path: 'result', component: ResultComponent },

  // Dashboard (si usas guard)
  { path: 'dashboard', component: DashboardComponent, canActivate: [adminGuard] },

  // Lazy load TRADICIONAL solo para crear-usuario (no hay duplicado de componente)
  {
    path: 'crear-usuario',
    loadChildren: () =>
      import('./components/crear-usuario/crear-usuario.module').then(m => m.CrearUsuarioModule)
  },

  // Fallback
 { path: '**', redirectTo: 'library' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
