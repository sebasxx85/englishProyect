import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-preposiciones',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './preposiciones.component.html',
  styleUrls: ['./preposiciones.component.scss']
})
export class PreposicionesComponent implements OnInit {
  showSolutions = false;
  jsonLd!: SafeHtml;

  // Lista rápida: atajos por categorías
  quickList = [
    { en: 'in', es: 'en/dentro (lugar grande); en (mes/año/parte del día)' },
    { en: 'on', es: 'sobre (contacto/superficie); en (día/fecha)' },
    { en: 'at', es: 'en (punto exacto/lugar específico); a (hora)' },
    { en: 'under / below', es: 'debajo (under = físico; below = nivel)' },
    { en: 'over / above', es: 'encima/sobre (over = movimiento; above = nivel)' },
    { en: 'next to / between / behind / in front of', es: 'al lado / entre / detrás / delante' },
    { en: 'to / into / onto', es: 'a/hacia; hacia dentro; hacia la superficie' },
    { en: 'from / out of / off', es: 'de/desde; fuera de; fuera de la superficie' },
    { en: 'by / with', es: 'por (autor/medio); con (compañía/instrumento)' },
    { en: 'for / about', es: 'para/por (propósito/duración); sobre (tema)' },
  ];

  // Glosario con ejemplo (toma tu contenido original y lo extiende un poco)
  glossary = [
    { term: 'in', tr: 'en, dentro de', ex: 'The keys are <strong>in</strong> the bag.' },
    { term: 'on', tr: 'sobre, encima de', ex: 'The book is <strong>on</strong> the table.' },
    { term: 'under', tr: 'debajo de (contacto posible)', ex: 'The cat is <strong>under</strong> the bed.' },
    { term: 'above', tr: 'encima de (sin contacto / nivel)', ex: 'The clock is <strong>above</strong> the door.' },
    { term: 'below', tr: 'debajo de (nivel)', ex: 'The painting is <strong>below</strong> the window.' },
    { term: 'next to', tr: 'al lado de', ex: 'The lamp is <strong>next to</strong> the sofa.' },
    { term: 'between', tr: 'entre (dos)', ex: 'The ball is <strong>between</strong> the shoes.' },
    { term: 'behind', tr: 'detrás de', ex: 'The car is <strong>behind</strong> the truck.' },
    { term: 'in front of', tr: 'delante de', ex: 'The bike is <strong>in front of</strong> the house.' },
    { term: 'over', tr: 'sobre (mov. por encima)', ex: 'The plane flew <strong>over</strong> the city.' },
    { term: 'into', tr: 'hacia dentro de', ex: 'She went <strong>into</strong> the room.' },
    { term: 'out of', tr: 'fuera de (movimiento)', ex: 'He walked <strong>out of</strong> the store.' },
    { term: 'to', tr: 'a, hacia', ex: 'We are going <strong>to</strong> the park.' },
    { term: 'at', tr: 'en (punto/lugar específico)', ex: 'He is <strong>at</strong> the door.' },
    { term: 'from', tr: 'de, desde', ex: 'I’m coming <strong>from</strong> school.' },
    { term: 'by', tr: 'junto a / por / en (transporte)', ex: 'The book was written <strong>by</strong> her.' },
    { term: 'with', tr: 'con (compañía/instrumento)', ex: 'I went <strong>with</strong> my friends.' },
    { term: 'without', tr: 'sin', ex: 'He left <strong>without</strong> his phone.' },
    { term: 'for', tr: 'para, por (propósito/duración)', ex: 'This gift is <strong>for</strong> you.' },
    { term: 'about', tr: 'sobre, acerca de', ex: 'We talked <strong>about</strong> the movie.' },
  ];

  practice = [
    { q: 'The picture is ___ the wall. (superficie)', a: 'on' },
    { q: 'She is waiting ___ the door. (punto específico)', a: 'at' },
    { q: 'They live ___ New York. (ciudad/área grande)', a: 'in' },
    { q: 'The cat jumped ___ the box. (hacia dentro)', a: 'into' },
    { q: 'He took the book ___ the shelf. (desde la superficie)', a: 'off' },
    { q: 'The plane flew ___ the mountains. (por encima, movimiento)', a: 'over' },
    { q: 'The ball is ___ the two cones. (entre dos)', a: 'between' },
    { q: 'We are traveling ___ train. (medio de transporte)', a: 'by' },
    { q: 'I cut the paper ___ scissors. (instrumento)', a: 'with' },
    { q: 'She talked ___ her trip. (tema)', a: 'about' },
    { q: 'I’m going ___ the gym. (dirección/destino)', a: 'to' },
    { q: 'He is coming ___ work. (origen)', a: 'from' },
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const pageTitle = 'Preposiciones en inglés: in, on, at y más — reglas y ejemplos';
    const description =
      'Guía clara de preposiciones en inglés (in, on, at, to, into, over…). Diferencias por uso, ejemplos y práctica con soluciones.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index,follow' });

    const json = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: pageTitle,
      description,
      inLanguage: 'es',
      author: { '@type': 'Organization', name: 'Free Language Tests' },
      publisher: { '@type': 'Organization', name: 'Free Language Tests' },
      datePublished: new Date().toISOString().slice(0, 10),
      mainEntityOfPage: { '@type': 'WebPage', '@id': '/library/gramatica/preposiciones' }
    };
    this.jsonLd = this.sanitizer.bypassSecurityTrustHtml(
      `<script type="application/ld+json">${JSON.stringify(json)}</script>`
    );
  }
}
