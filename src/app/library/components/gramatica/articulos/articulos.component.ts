import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Title, Meta, DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {
  showSolutions = false;
  jsonLd!: SafeHtml;

  quickList = [
    { en: 'a', es: 'un/una (antes de sonido consonántico)' },
    { en: 'an', es: 'un/una (antes de sonido vocálico)' },
    { en: 'the', es: 'el/la/los/las (definido/específico)' },
    { en: 'some', es: 'algunos/algo de (plural/uncountable, informal)' },
    { en: 'any', es: 'alguno/ninguno (negaciones/preguntas)' },
    { en: 'no article', es: 'sin artículo (plural/uncountable genérico)' },
    { en: 'a/an + job', es: 'profesiones: a teacher, an engineer' },
    { en: 'the + superlative', es: 'the best, the most important' },
    { en: 'the + uniques', es: 'the sun, the internet' },
    { en: 'the + of + noun', es: 'the end of the day, the color of the sky' },
  ];

  glossary = [
    { term: 'a', tr: 'indefinido', ex: 'I saw <strong>a</strong> dog in the park.' },
    { term: 'an', tr: 'indefinido', ex: 'She ate <strong>an</strong> apple this morning.' },
    { term: 'the', tr: 'definido', ex: '<strong>The</strong> book is on the table.' },
    { term: 'no article', tr: 'genérico', ex: '<strong>Books</strong> are expensive nowadays.' },
    { term: 'the + superlative', tr: 'único en el grupo', ex: 'This is <strong>the</strong> fastest route.' },
    { term: 'a/an + job', tr: 'profesiones', ex: 'My sister is <strong>an</strong> architect.' },
    { term: 'the + uniques', tr: 'únicos', ex: '<strong>The</strong> sun is bright today.' },
  ];

  practice = [
    { q: 'I need ___ umbrella. (un sonido vocálico)', a: 'an' },
    { q: 'He bought ___ laptop yesterday. (indefinido)', a: 'a' },
    { q: '___ moon looks beautiful. (único)', a: 'The' },
    { q: '___ water is essential for life. (incountable genérico)', a: '— (sin artículo)' },
    { q: 'She is ___ engineer. (profesión)', a: 'an' },
    { q: 'This is ___ best option. (superlativo)', a: 'the' },
    { q: 'Do you have ___ questions? (pregunta, alguno)', a: 'any' },
    { q: 'There are ___ apples on the table. (algunas, informal)', a: 'some' },
    { q: '___ cats are independent animals. (plural genérico)', a: '— (sin artículo)' },
    { q: 'Please close ___ door. (específico)', a: 'the' },
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    const pageTitle = 'Artículos en inglés: a, an, the — reglas, uso y ejemplos';
    const description =
      'Guía clara de artículos en inglés: a, an y the. Cuándo usar cada uno, casos sin artículo, ejemplos y práctica resuelta.';

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
      mainEntityOfPage: { '@type': 'WebPage', '@id': '/library/gramatica/articulos' }
    };
    this.jsonLd = this.sanitizer.bypassSecurityTrustHtml(
      `<script type="application/ld+json">${JSON.stringify(json)}</script>`
    );
  }
}
