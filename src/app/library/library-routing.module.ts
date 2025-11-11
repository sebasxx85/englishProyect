import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from './library.component';

const routes: Routes = [
  {
    path: '',
    component: LibraryComponent,
    children: [
      // Página por defecto DENTRO de Library (usar ruta hija RELATIVA, no '/library')
      { path: '', pathMatch: 'full', redirectTo: 'vocabulario/ingles-para-viajes-frases-en-aeropuerto-y-hotel' },


      // ===== VOCABULARIO =====
  { path: 'vocabulario/animales-en-ingles-vocabulario-y-ejemplos',
    loadComponent: () => import('./components/vocabulario/animales/animales.component').then(m => m.AnimalesComponent),
    data: {
      title: 'Animales en inglés: vocabulario y ejemplos',
      description: 'Lista de animales en inglés con pronunciación y frases de ejemplo para aprender vocabulario básico.',
      keywords: 'animales en inglés, vocabulario de animales, aprender inglés, ejemplos'
    }
  },
  { path: 'vocabulario/colores-en-ingles-pronunciacion-y-ejemplos',
    loadComponent: () => import('./components/vocabulario/colores/colores.component').then(m => m.ColoresComponent),
    data: {
      title: 'Colores en inglés: pronunciación y ejemplos',
      description: 'Aprender los colores en inglés con pronunciación, ejemplos y ejercicios rápidos.',
      keywords: 'colores en inglés, vocabulario, aprender inglés'
    }
  },
  { path: 'vocabulario/partes-del-cuerpo-en-ingles-vocabulario-medico-basico',
    loadComponent: () => import('./components/vocabulario/cuerpo-humano/cuerpo-humano.component').then(m => m.PartesCuerpoComponent),
    data: {
      title: 'Partes del cuerpo en inglés: vocabulario y uso',
      description: 'Vocabulario de partes del cuerpo en inglés con ejemplos útiles y términos básicos.',
      keywords: 'partes del cuerpo en inglés, vocabulario médico, inglés básico'
    }
  },
  { path: 'vocabulario/dias-de-la-semana-en-ingles',
    loadComponent: () => import('./components/vocabulario/dias/dias.component').then(m => m.DiasComponent),
    data: {
      title: 'Días de la semana en inglés',
      description: 'Cómo se escriben y pronuncian los días de la semana en inglés con ejemplos.',
      keywords: 'días en inglés, vocabulario, aprender inglés'
    }
  },
  { path: 'vocabulario/frutas-en-ingles-lista-y-ejemplos',
    loadComponent: () => import('./components/vocabulario/frutas/frutas.component').then(m => m.FrutasComponent),
    data: {
      title: 'Frutas en inglés: lista y ejemplos',
      description: 'Lista de frutas en inglés con traducción y oraciones de ejemplo.',
      keywords: 'frutas en inglés, vocabulario, inglés para principiantes'
    }
  },
  { path: 'vocabulario/meses-del-ano-en-ingles',
    loadComponent: () => import('./components/vocabulario/meses/meses.component').then(m => m.MesesComponent),
    data: {
      title: 'Meses del año en inglés',
      description: 'Aprender los meses del año en inglés con ejemplos y trucos de memoria.',
      keywords: 'meses en inglés, vocabulario, aprender inglés'
    }
  },
  { path: 'vocabulario/ropa-en-ingles-vocabulario-para-compras',
    loadComponent: () => import('./components/vocabulario/ropa/ropa.component').then(m => m.RopaComponent),
    data: {
      title: 'Ropa en inglés: vocabulario para compras',
      description: 'Vocabulario de ropa en inglés y frases útiles para ir de compras.',
      keywords: 'ropa en inglés, compras, vocabulario, inglés para viajes'
    }
  },
  { path: 'vocabulario/ingles-para-compras-frases-utiles',
    loadComponent: () => import('./components/vocabulario/compras/compras.component').then(m => m.ComprasComponent),
    data: {
      title: 'Inglés para compras: frases útiles',
      description: 'Frases básicas en inglés para tiendas, precios, tallas y devoluciones.',
      keywords: 'inglés para compras, frases en inglés, tiendas'
    }
  },
  { path: 'vocabulario/ingles-para-viajes-frases-en-aeropuerto-y-hotel',
    loadComponent: () => import('./components/vocabulario/viajes/viajes.component').then(m => m.ViajesComponent),
    data: {
      title: 'Inglés para viajes: frases en aeropuerto y hotel',
      description: 'Frases y vocabulario clave en inglés para viajar: check-in, migración, reservas y más.',
      keywords: 'inglés para viajar, turismo, aeropuerto, hotel, frases'
    }
  },

  // ===== VERBOS =====
  { path: 'verbos/verbo-to-be-presente-y-pasado',
    loadComponent: () => import('./components/verbos/to-be/to-be.component').then(m => m.ToBeComponent),
    data: {
      title: 'Verbo to be: presente y pasado con ejemplos',
      description: 'Usos del verbo to be (am, is, are / was, were), contracciones, negaciones y preguntas.',
      keywords: 'verbo to be, am is are, was were, inglés básico'
    }
  },
  { path: 'verbos/verbo-to-do-usos-y-ejemplos',
    loadComponent: () => import('./components/verbos/to-do/to-do.component').then(m => m.ToDoComponent),
    data: { title: 'Verbo to do: usos y ejemplos', description: 'Auxiliar y verbo principal: do/does/did.', keywords: 'verbo to do, auxiliar, inglés' }
  },
  { path: 'verbos/verbo-to-get-frases-comunes',
    loadComponent: () => import('./components/verbos/to-get/to-get.component').then(m => m.ToGetComponent),
    data: { title: 'Verbo to get: frases comunes', description: 'Usos frecuentes de to get con ejemplos.', keywords: 'to get en inglés, phrasal verbs' }
  },
  { path: 'verbos/verbo-to-go-guia-rapida',
    loadComponent: () => import('./components/verbos/to-go/to-go.component').then(m => m.ToGoComponent),
    data: { title: 'Verbo to go: guía rápida', description: 'Uso de to go en presente y pasado con expresiones comunes.', keywords: 'to go, ir en inglés' }
  },
  { path: 'verbos/verbo-to-have-usos-basicos',
    loadComponent: () => import('./components/verbos/to-have/to-have.component').then(m => m.ToHaveComponent),
    data: { title: 'Verbo to have: usos básicos', description: 'Tener y auxiliar en perfectos: have/has/had.', keywords: 'to have, present perfect' }
  },
  { path: 'verbos/verbo-to-make-cuando-usarlo',
    loadComponent: () => import('./components/verbos/to-make/to-make.component').then(m => m.ToMakeComponent),
    data: { title: 'Verbo to make: cuándo usarlo', description: 'Diferencia make/do y expresiones comunes.', keywords: 'to make vs to do, inglés' }
  },

  // ===== GRAMÁTICA =====
  { path: 'gramatica/articulos-en-ingles-a-an-the',
    loadComponent: () => import('./components/gramatica/articulos/articulos.component').then(m => m.ArticulosComponent),
    data: { title: 'Artículos en inglés: a, an, the', description: 'Uso de a, an y the con ejemplos claros.', keywords: 'artículos en inglés, a an the' }
  },
  { path: 'gramatica/pronombres-en-ingles-guia',
    loadComponent: () => import('./components/gramatica/pronombres/pronombres.component').then(m => m.PronombresComponent),
    data: { title: 'Pronombres en inglés: guía completa', description: 'Subject, object, possessive, reflexive.', keywords: 'pronombres en inglés, possessive' }
  },
  { path: 'gramatica/presente-simple-en-ingles',
    loadComponent: () => import('./components/gramatica/presente-simple/presente-simple.component').then(m => m.PresenteSimpleComponent),
    data: { title: 'Presente simple en inglés', description: 'Formas, usos, negación y preguntas con do/does.', keywords: 'present simple, do does' }
  },
  { path: 'gramatica/preposiciones-en-ingles-guia-rapida',
    loadComponent: () => import('./components/gramatica/preposiciones/preposiciones.component').then(m => m.PreposicionesComponent),
    data: { title: 'Preposiciones en inglés: guía rápida', description: 'In, on, at y más, con ejemplos claros.', keywords: 'preposiciones en inglés, in on at' }
  },

  // ===== OTROS =====
  { path: 'otros/antonimos-en-ingles-lista',
    loadComponent: () => import('./components/avanzado/antonimos/antonimos.component').then(m => m.AntonimosComponent),
    data: { title: 'Antónimos en inglés: lista esencial', description: 'Pares frecuentes de antónimos con ejemplos.', keywords: 'antónimos en inglés' }
  },
  { path: 'otros/sinonimos-en-ingles-lista',
    loadComponent: () => import('./components/avanzado/sinonimos/sinonimos.component').then(m => m.SinonimosComponent),
    data: { title: 'Sinónimos en inglés: lista útil', description: 'Sinónimos comunes y diferencias de uso.', keywords: 'sinónimos en inglés' }
  },

  // ===== REDIRECTS DESDE RUTAS ANTIGUAS =====
{ path: 'vocabulario/animales', redirectTo: 'vocabulario/animales-en-ingles-vocabulario-y-ejemplos', pathMatch: 'full' },
{ path: 'vocabulario/colores',  redirectTo: 'vocabulario/colores-en-ingles-pronunciacion-y-ejemplos', pathMatch: 'full' },
{ path: 'vocabulario/cuerpo',   redirectTo: 'vocabulario/partes-del-cuerpo-en-ingles-vocabulario-medico-basico', pathMatch: 'full' },
{ path: 'vocabulario/dias',     redirectTo: 'vocabulario/dias-de-la-semana-en-ingles', pathMatch: 'full' },
{ path: 'vocabulario/frutas',   redirectTo: 'vocabulario/frutas-en-ingles-lista-y-ejemplos', pathMatch: 'full' },
{ path: 'vocabulario/meses',    redirectTo: 'vocabulario/meses-del-ano-en-ingles', pathMatch: 'full' },
{ path: 'vocabulario/ropa',     redirectTo: 'vocabulario/ropa-en-ingles-vocabulario-para-compras', pathMatch: 'full' },
{ path: 'vocabulario/compras',  redirectTo: 'vocabulario/ingles-para-compras-frases-utiles', pathMatch: 'full' },
{ path: 'vocabulario/viajes',   redirectTo: 'vocabulario/ingles-para-viajes-frases-en-aeropuerto-y-hotel', pathMatch: 'full' },

{ path: 'verbos/to-be',   redirectTo: 'verbos/verbo-to-be-presente-y-pasado', pathMatch: 'full' },
{ path: 'verbos/to-do',   redirectTo: 'verbos/verbo-to-do-usos-y-ejemplos', pathMatch: 'full' },
{ path: 'verbos/to-get',  redirectTo: 'verbos/verbo-to-get-frases-comunes', pathMatch: 'full' },
{ path: 'verbos/to-go',   redirectTo: 'verbos/verbo-to-go-guia-rapida', pathMatch: 'full' },
{ path: 'verbos/to-have', redirectTo: 'verbos/verbo-to-have-usos-basicos', pathMatch: 'full' },
{ path: 'verbos/to-make', redirectTo: 'verbos/verbo-to-make-cuando-usarlo', pathMatch: 'full' },

{ path: 'gramatica/articulos',       redirectTo: 'gramatica/articulos-en-ingles-a-an-the', pathMatch: 'full' },
{ path: 'gramatica/pronombres',      redirectTo: 'gramatica/pronombres-en-ingles-guia', pathMatch: 'full' },
{ path: 'gramatica/presente-simple', redirectTo: 'gramatica/presente-simple-en-ingles', pathMatch: 'full' },
{ path: 'gramatica/preposiciones',   redirectTo: 'gramatica/preposiciones-en-ingles-guia-rapida', pathMatch: 'full' },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule {}
