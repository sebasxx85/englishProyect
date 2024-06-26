import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // Ruta estática para el componente Home
  { path: '', component: HomeComponent }, 
  //Usando lazy load
  { path: 'result', loadChildren: () => 
    import('./components/result/result.component').then(m => m.ResultComponent) },
  { path: 'select', loadChildren: () => 
    import('./components/select-level/select-level.component').then(m => m.SelectLevelComponent) },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
