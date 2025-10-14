import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryComponent,
    children: [
      // Página por defecto dentro de Library
      { path: '', pathMatch: 'full', redirectTo: 'verbos/to-be' },

      // VOCABULARIO
      { path: 'vocabulario/animales', loadComponent: () => import('./components/vocabulario/animales/animales.component').then(m => m.AnimalesComponent) },
      { path: 'vocabulario/colores',  loadComponent: () => import('./components/vocabulario/colores/colores.component').then(m => m.ColoresComponent) },
      { path: 'vocabulario/cuerpo',   loadComponent: () => import('./components/vocabulario/cuerpo-humano/cuerpo-humano.component').then(m => m.PartesCuerpoComponent) },
      { path: 'vocabulario/dias',     loadComponent: () => import('./components/vocabulario/dias/dias.component').then(m => m.DiasComponent) },
      { path: 'vocabulario/frutas',   loadComponent: () => import('./components/vocabulario/frutas/frutas.component').then(m => m.FrutasComponent) },
      { path: 'vocabulario/meses',    loadComponent: () => import('./components/vocabulario/meses/meses.component').then(m => m.MesesComponent) },
      { path: 'vocabulario/ropa',     loadComponent: () => import('./components/vocabulario/ropa/ropa.component').then(m => m.RopaComponent) },
      { path: 'vocabulario/compras', loadComponent: () => import('./components/vocabulario/compras/compras.component').then(m => m.ComprasComponent) },
      { path: 'vocabulario/viajes',  loadComponent: () => import('./components/vocabulario/viajes/viajes.component').then(m => m.ViajesComponent) },

      // VERBOS
      { path: 'verbos/to-be',   loadComponent: () => import('./components/verbos/to-be/to-be.component').then(m => m.ToBeComponent) },
      { path: 'verbos/to-do',   loadComponent: () => import('./components/verbos/to-do/to-do.component').then(m => m.ToDoComponent) },
      { path: 'verbos/to-get',  loadComponent: () => import('./components/verbos/to-get/to-get.component').then(m => m.ToGetComponent) },
      { path: 'verbos/to-go',   loadComponent: () => import('./components/verbos/to-go/to-go.component').then(m => m.ToGoComponent) },
      { path: 'verbos/to-have', loadComponent: () => import('./components/verbos/to-have/to-have.component').then(m => m.ToHaveComponent) },
      { path: 'verbos/to-make', loadComponent: () => import('./components/verbos/to-make/to-make.component').then(m => m.ToMakeComponent) },

      // GRAMÁTICA
      { path: 'gramatica/articulos',        loadComponent: () => import('./components/gramatica/articulos/articulos.component').then(m => m.ArticulosComponent) },
      { path: 'gramatica/pronombres',       loadComponent: () => import('./components/gramatica/pronombres/pronombres.component').then(m => m.PronombresComponent) },
      { path: 'gramatica/presente-simple',  loadComponent: () => import('./components/gramatica/presente-simple/presente-simple.component').then(m => m.PresenteSimpleComponent) },
      { path: 'gramatica/preposiciones',    loadComponent: () => import('./components/gramatica/preposiciones/preposiciones.component').then(m => m.PreposicionesComponent) },
 
      // OTROS
      { path: 'otros/antonimos', loadComponent: () => import('./components/avanzado/antonimos/antonimos.component').then(m => m.AntonimosComponent) },
      { path: 'otros/sinonimos', loadComponent: () => import('./components/avanzado/sinonimos/sinonimos.component').then(m => m.SinonimosComponent) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule {}
