import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Title, Meta } from '@angular/platform-browser';
import { SharedModule } from 'src/app/Shared/shared.module';
import { AdsenseInArticleComponent } from '../../adsense-in-article/adsense-in-article.component';
import { AdsenseFooterComponent } from '../../adsense-footer/adsense-footer.component';

@Component({
  selector: 'app-antonimos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule,
                   AdsenseInArticleComponent, AdsenseFooterComponent], 
  templateUrl: './antonimos.component.html',
  styleUrl: './antonimos.component.scss'
})
export class AntonimosComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    // SEO básico para este artículo
    this.title.setTitle('Antónimos en inglés: guía completa con ejemplos | Proyecto Inglés');
    this.meta.updateTag({
      name: 'description',
      content:
        'Guía clara de antónimos en inglés: qué son, cómo se forman (un-, in-, dis-), ejemplos con oraciones y práctica rápida. Aprendizaje para niveles básico e intermedio.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'antónimos en inglés, antonyms, vocabulario inglés, opuestos en inglés, ejercicios'
    });
  }

  // Mantengo tu data para reutilizarla como lista (ya no tabla)
  antonimos = [
    { palabra: 'up (arriba)', antonimo: 'down (abajo)' },
    { palabra: 'big (grande)', antonimo: 'small (pequeño)' },
    { palabra: 'hot (caliente)', antonimo: 'cold (frío)' },
    { palabra: 'fast (rápido)', antonimo: 'slow (lento)' },
    { palabra: 'happy (feliz)', antonimo: 'sad (triste)' },
    { palabra: 'young (joven)', antonimo: 'old (viejo)' },
    { palabra: 'light (claro)', antonimo: 'dark (oscuro)' },
    { palabra: 'clean (limpio)', antonimo: 'dirty (sucio)' },
    { palabra: 'open (abierto)', antonimo: 'closed (cerrado)' },
    { palabra: 'early (temprano)', antonimo: 'late (tarde)' },
    { palabra: 'strong (fuerte)', antonimo: 'weak (débil)' },
    { palabra: 'hard (duro)', antonimo: 'soft (blando)' },
    { palabra: 'full (lleno)', antonimo: 'empty (vacío)' },
    { palabra: 'new (nuevo)', antonimo: 'old (viejo)' },
    { palabra: 'right (correcto)', antonimo: 'wrong (incorrecto)' },
    { palabra: 'day (día)', antonimo: 'night (noche)' },
    { palabra: 'beautiful (hermoso)', antonimo: 'ugly (feo)' },
    { palabra: 'rich (rico)', antonimo: 'poor (pobre)' },
    { palabra: 'easy (fácil)', antonimo: 'difficult (difícil)' },
    { palabra: 'true (verdadero)', antonimo: 'false (falso)' }
  ];

  // Ejemplos en oraciones (inglés + traducción)
  ejemplos = [
    {
      en: 'The water is hot, but the juice is cold.',
      es: 'El agua está caliente, pero el jugo está frío.'
    },
    {
      en: 'She prefers big cities, while I like small towns.',
      es: 'Ella prefiere las ciudades grandes, mientras que a mí me gustan los pueblos pequeños.'
    },
    {
      en: 'He arrived early; I arrived late.',
      es: 'Él llegó temprano; yo llegué tarde.'
    },
    {
      en: 'This bag is light, that one is very heavy.',
      es: 'Esta bolsa es liviana, esa es muy pesada.'
    },
    {
      en: 'The answer is right, not wrong.',
      es: 'La respuesta es correcta, no incorrecta.'
    }
  ];
}
