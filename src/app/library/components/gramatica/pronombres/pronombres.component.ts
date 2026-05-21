import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AdsenseInArticleComponent } from '../../adsense-in-article/adsense-in-article.component';
import { AdsenseFooterComponent } from '../../adsense-footer/adsense-footer.component';

@Component({
    selector: 'app-pronombres',
    imports: [CommonModule, MatCardModule, MatDividerModule,
        AdsenseInArticleComponent, AdsenseFooterComponent],
    templateUrl: './pronombres.component.html',
    styleUrls: ['./pronombres.component.scss']
})
export class PronombresComponent {
  constructor(private s: DomSanitizer) {
    const ld = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Pronombres en inglés: personales, demostrativos, interrogativos e indefinidos',
      description:
        'Guía rápida con tablas, ejemplos y práctica: pronombres personales (sujeto/objeto), demostrativos, interrogativos e indefinidos.',
      inLanguage: 'es',
      author: { '@type': 'Organization', name: 'Free Language Tests' }
    };
    this.jsonLd = this.s.bypassSecurityTrustHtml(
      `<script type="application/ld+json">${JSON.stringify(ld)}</script>`
    );
  }

  showSolutions = false;
  jsonLd: SafeHtml;

  // Lista rápida (mezcla útil para reconocimiento)
  quickList = [
    { en: 'I', es: 'yo' },
    { en: 'you', es: 'tú / usted' },
    { en: 'he', es: 'él' },
    { en: 'she', es: 'ella' },
    { en: 'it', es: 'ello / eso' },
    { en: 'we', es: 'nosotros(as)' },
    { en: 'they', es: 'ellos(as)' },
    { en: 'me', es: 'me / a mí' },
    { en: 'him', es: 'lo / a él' },
    { en: 'her', es: 'la / a ella' },
    { en: 'us', es: 'nos' },
    { en: 'them', es: 'los/las / a ellos' },
    { en: 'this / that', es: 'este/esa' },
    { en: 'these / those', es: 'estos/esas' },
    { en: 'who / what', es: 'quién / qué' },
    { en: 'where / when', es: 'dónde / cuándo' },
    { en: 'why / how', es: 'por qué / cómo' },
    { en: 'someone / anyone', es: 'alguien / cualquiera' }
  ];

  // Mini-glosario
  glossary = [
    { term: 'I', tr: 'yo', ex: '“I am ready.”' },
    { term: 'me', tr: 'me / a mí', ex: '“She called <strong>me</strong>.”' },
    { term: 'this / these', tr: 'este / estos', ex: '“<strong>This</strong> pen / <strong>These</strong> pens.”' },
    { term: 'that / those', tr: 'ese / esos', ex: '“I like <strong>those</strong> shoes.”' },
    { term: 'who / what', tr: 'quién / qué', ex: '“<strong>Who</strong> is he? <strong>What</strong> is that?”' },
    { term: 'someone / anything', tr: 'alguien / algo (neg/preg)', ex: '“Is there <strong>anyone</strong> here?”' }
  ];

  // Tablas simples
  personalesSujeto = [
    { item: 'I', tr: 'yo', ej: 'I play.' },
    { item: 'you', tr: 'tú/usted', ej: 'You work.' },
    { item: 'he', tr: 'él', ej: 'He reads.' },
    { item: 'she', tr: 'ella', ej: 'She cooks.' },
    { item: 'it', tr: 'ello/eso', ej: 'It rains.' },
    { item: 'we', tr: 'nosotros', ej: 'We study.' },
    { item: 'they', tr: 'ellos', ej: 'They travel.' }
  ];

  personalesObjeto = [
    { item: 'me', tr: 'me / a mí', ej: 'Call me.' },
    { item: 'you', tr: 'te / le', ej: 'I see you.' },
    { item: 'him', tr: 'lo / a él', ej: 'I know him.' },
    { item: 'her', tr: 'la / a ella', ej: 'Help her.' },
    { item: 'it', tr: 'lo/la', ej: 'Fix it.' },
    { item: 'us', tr: 'nos', ej: 'Join us.' },
    { item: 'them', tr: 'los/las', ej: 'Ask them.' }
  ];

  demostrativos = [
    { item: 'this', tr: 'este/esta', ej: 'This book is new.' },
    { item: 'that', tr: 'ese/esa', ej: 'That car is fast.' },
    { item: 'these', tr: 'estos/estas', ej: 'These apples are fresh.' },
    { item: 'those', tr: 'esos/esas', ej: 'Those houses are big.' }
  ];

  interrogativos = [
    { item: 'who', tr: 'quién', ej: 'Who is your teacher?' },
    { item: 'what', tr: 'qué', ej: 'What do you do?' },
    { item: 'which', tr: 'cuál(es)', ej: 'Which color do you prefer?' },
    { item: 'where', tr: 'dónde', ej: 'Where do you live?' },
    { item: 'when', tr: 'cuándo', ej: 'When is the meeting?' },
    { item: 'why', tr: 'por qué', ej: 'Why are you late?' },
    { item: 'how', tr: 'cómo / cuánto(s)', ej: 'How old are you?' }
  ];

  indefinidos = [
    { item: 'someone', tr: 'alguien', ej: 'Someone is at the door.' },
    { item: 'anyone', tr: 'cualquiera / alguien (neg/preg)', ej: 'Does anyone know the answer?' },
    { item: 'everyone', tr: 'todos', ej: 'Everyone was happy.' },
    { item: 'something', tr: 'algo', ej: 'I need something to drink.' },
    { item: 'anything', tr: 'cualquier cosa (neg/preg)', ej: 'I didn’t buy anything.' },
    { item: 'nothing', tr: 'nada', ej: 'Nothing happened.' },
    { item: 'each', tr: 'cada', ej: 'Each student has a book.' }
  ];

  // Práctica
  practice = [
    { q: '___ am hungry. (yo)', a: 'I' },
    { q: 'Can you help ___? (me)', a: 'me' },
    { q: '___ car is fast. (ese)', a: 'That' },
    { q: '___ is your name? (qué)', a: 'What' },
    { q: 'I can’t see ___ here. (a nadie)', a: 'anyone' },
    { q: '___ are my friends. (estos)', a: 'These' },
    { q: 'She called ___. (a ellos)', a: 'them' },
    { q: '___ do you live? (dónde)', a: 'Where' }
  ];
}
