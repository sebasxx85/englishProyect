import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Title, Meta } from '@angular/platform-browser';
import { AdsenseInArticleComponent } from '../../adsense-in-article/adsense-in-article.component';
import { AdsenseFooterComponent } from '../../adsense-footer/adsense-footer.component';

@Component({
  selector: 'app-presente-simple',
  standalone: true,
   imports: [CommonModule, MatCardModule, MatDividerModule,
               AdsenseInArticleComponent, AdsenseFooterComponent], 
  templateUrl: './presente-simple.component.html',
  styleUrls: ['./presente-simple.component.scss']
})
export class PresenteSimpleComponent {
  // Listas rápidas y glosario
  quickList = [
    { en: 'I/you/we/they + base verb', es: 'Sujeto + verbo base' },
    { en: 'He/she/it + base + -s/-es', es: '3ª persona singular agrega -s/-es' },
    { en: "Don't / Doesn't + base", es: 'Negación con do/does + not' },
    { en: 'Do/Does + subject + base?', es: 'Preguntas con do/does' },
    { en: 'Always, usually, often, sometimes, never', es: 'Adverbios de frecuencia' }
  ];

  glossary = [
    { term: 'Routine', def: 'Acción habitual: I wake up at 7.' },
    { term: 'Facts', def: 'Hechos generales: Water boils at 100°C.' },
    { term: 'Schedules', def: 'Horarios: The train leaves at 6.' }
  ];

  // Reglas de 3ª persona (s/es/ies)
  rules = [
    { head: 'Add -s', body: 'play → plays, read → reads' },
    { head: 'Add -es', body: 'verbos que terminan en -ch, -sh, -ss, -x, -o: watch → watches' },
    { head: 'Consonant + y → -ies', body: 'study → studies (pero: play → plays)' }
  ];

  // Ejemplos tipo “tabla” (afirm., neg., pregunta)
  sentences = [
    { pron: 'I',   base: 'play',  pres: 'play',   tipo: 'Affirmative', ex: 'I play soccer every Sunday.' },
    { pron: 'He',  base: 'go',    pres: 'goes',   tipo: 'Affirmative', ex: 'He goes to school at 8 AM.' },
    { pron: 'She', base: 'watch', pres: 'watches',tipo: 'Affirmative', ex: 'She watches TV at night.' },
    { pron: 'We',  base: 'study', pres: 'study',  tipo: 'Affirmative', ex: 'We study English on Mondays.' },
    { pron: 'You', base: 'read',  pres: 'read',   tipo: 'Affirmative', ex: 'You read fast.' },
    { pron: 'They',base: 'work',  pres: 'work',   tipo: 'Affirmative', ex: 'They work in an office.' },

    { pron: 'He',  base: 'like',  pres: 'likes',  tipo: 'Negative',    ex: "He doesn't like coffee." },
    { pron: 'She', base: 'eat',   pres: 'eats',   tipo: 'Negative',    ex: "She doesn't eat meat." },
    { pron: 'I',   base: 'drink', pres: 'drink',  tipo: 'Negative',    ex: "I don't drink soda." },
    { pron: 'We',  base: 'have',  pres: 'have',   tipo: 'Negative',    ex: "We don't have class today." },

    { pron: 'Do you',   base: 'play',  pres: 'play',  tipo: 'Question', ex: 'Do you play video games?' },
    { pron: 'Does he',  base: 'work',  pres: 'work',  tipo: 'Question', ex: 'Does he work on weekends?' },
    { pron: 'Do they',  base: 'study', pres: 'study', tipo: 'Question', ex: 'Do they study together?' }
  ];

  // Práctica
  practice = [
    { q: 'She ____ (study) every night.', a: 'studies' },
    { q: 'They ____ (not like) spicy food.', a: "do not like / don’t like" },
    { q: '____ he ____ (play) tennis?', a: 'Does he play?' },
    { q: 'I ____ (read) the news in the morning.', a: 'read' },
    { q: 'The bus ____ (leave) at 7:30.', a: 'leaves' },
  ];

  // FAQ
  faq = [
    { q: '¿Cuándo uso do y does?', a: 'Do: I/you/we/they. Does: he/she/it. En negativa: don’t/doesn’t + verbo base.' },
    { q: '¿El verbo cambia en preguntas?', a: 'No. Después de do/does o don’t/doesn’t, siempre va el verbo base.' },
    { q: '¿Dónde van los adverbios de frecuencia?', a: 'Antes del verbo principal: She often reads. Con “be”: He is usually late.' }
  ];

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
    // SEO
    this.title.setTitle('Presente Simple en inglés: reglas, ejemplos y práctica');
    this.meta.updateTag({ name: 'description', content: 'Guía clara del presente simple en inglés: reglas de tercera persona, do/does, negación, adverbios de frecuencia, ejemplos y ejercicios con soluciones.' });

    // JSON-LD Article
    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Presente Simple en inglés: reglas, ejemplos y práctica',
      description: 'Cómo formar el presente simple en inglés: afirmativa, negativa, preguntas, reglas de -s/-es/-ies, adverbios de frecuencia y ejercicios.',
      inLanguage: 'es',
      author: { '@type': 'Organization', name: 'Free Language Tests' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://tusitio.com/library/gramatica/presente-simple' }
    });
    this.doc.head.appendChild(script);
  }
}
