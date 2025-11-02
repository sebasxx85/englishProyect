import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Title, Meta } from '@angular/platform-browser';
import { SharedModule } from 'src/app/Shared/shared.module';
import { AdsenseInArticleComponent } from '../../adsense-in-article/adsense-in-article.component';
import { AdsenseFooterComponent } from '../../adsense-footer/adsense-footer.component';

@Component({
  selector: 'app-sinonimos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule,
                     AdsenseInArticleComponent, AdsenseFooterComponent], 
  templateUrl: './sinonimos.component.html',
  styleUrl: './sinonimos.component.scss'
})
export class SinonimosComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Sinónimos en inglés: guía con ejemplos | Biblioteca');
    this.meta.updateTag({
      name: 'description',
      content:
        'Qué son los sinónimos en inglés, diferencias de matiz (near-synonyms), registro formal/informal y colocaciones. Lista esencial y ejemplos en contexto.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'sinónimos en inglés, synonyms, vocabulario inglés, near-synonyms, collocations'
    });
  }

  // Mantengo tu data para mostrarla en lista (no tabla)
  sinonimos = [
    { palabra: 'big (grande)', sinonimo: 'large (grande)' },
    { palabra: 'small (pequeño)', sinonimo: 'tiny (diminuto)' },
    { palabra: 'happy (feliz)', sinonimo: 'joyful (alegre)' },
    { palabra: 'sad (triste)', sinonimo: 'unhappy (infeliz)' },
    { palabra: 'fast (rápido)', sinonimo: 'quick (veloz)' },
    { palabra: 'slow (lento)', sinonimo: 'sluggish (pausado)' },
    { palabra: 'smart (inteligente)', sinonimo: 'clever (listo)' },
    { palabra: 'angry (enojado)', sinonimo: 'mad (furioso)' },
    { palabra: 'cold (frío)', sinonimo: 'chilly (fresco)' },
    { palabra: 'hot (caliente)', sinonimo: 'warm (templado)' },
    { palabra: 'pretty (bonita)', sinonimo: 'beautiful (hermosa)' },
    { palabra: 'rich (rico)', sinonimo: 'wealthy (adinerado)' },
    { palabra: 'funny (divertido)', sinonimo: 'humorous (gracioso)' },
    { palabra: 'strong (fuerte)', sinonimo: 'powerful (poderoso)' },
    { palabra: 'clean (limpio)', sinonimo: 'neat (aseado)' },
    { palabra: 'tired (cansado)', sinonimo: 'exhausted (agotado)' },
    { palabra: 'begin (empezar)', sinonimo: 'start (iniciar)' },
    { palabra: 'end (terminar)', sinonimo: 'finish (finalizar)' },
    { palabra: 'idea (idea)', sinonimo: 'thought (pensamiento)' },
    { palabra: 'look (mirar)', sinonimo: 'glance (observar)' }
  ];

  ejemplos = [
    {
      en: 'He is a very smart student with clever solutions.',
      es: 'Es un estudiante muy inteligente con soluciones ingeniosas.'
    },
    {
      en: 'It was a warm afternoon, not too hot.',
      es: 'Fue una tarde templada, no demasiado calurosa.'
    },
    {
      en: 'She gave me a quick glance and kept walking.',
      es: 'Me lanzó una mirada rápida y siguió caminando.'
    },
    {
      en: 'After a long day, I felt exhausted rather than just tired.',
      es: 'Después de un día largo, me sentí agotado más que solo cansado.'
    },
    {
      en: 'They started the project at the beginning of May.',
      es: 'Comenzaron el proyecto a principios de mayo.'
    }
  ];
}
