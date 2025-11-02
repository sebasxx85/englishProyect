import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AdsenseInArticleComponent } from '../../adsense-in-article/adsense-in-article.component';
import { AdsenseFooterComponent } from '../../adsense-footer/adsense-footer.component';

interface MesItem {
  mes: string;
  traduccion: string;
  ejemplos: {
    present: string; // Presente (rutina/hábito/verdad general)
    past: string;    // Pasado simple
    future: string;  // Futuro (will / going to)
  };
}

@Component({
  selector: 'app-meses',
  standalone: true,
    imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule, 
                MatDividerModule, AdsenseInArticleComponent, AdsenseFooterComponent],
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.scss']
})
export class MesesComponent {
  title = 'Meses del año en inglés';

  meses: MesItem[] = [
    { mes: 'January', traduccion: 'Enero', ejemplos: {
      present: 'It usually gets very cold in January.',
      past: 'We moved to a new house last January.',
      future: 'We will start the project in January.'
    }},
    { mes: 'February', traduccion: 'Febrero', ejemplos: {
      present: 'Valentine’s Day is in February.',
      past: 'They traveled to the mountains last February.',
      future: 'They are going to run a marathon in February.'
    }},
    { mes: 'March', traduccion: 'Marzo', ejemplos: {
      present: 'Spring begins in March in many countries.',
      past: 'She graduated in March last year.',
      future: 'She will launch her podcast in March.'
    }},
    { mes: 'April', traduccion: 'Abril', ejemplos: {
      present: 'It often rains in April.',
      past: 'We visited our grandparents in April.',
      future: 'We are going to paint the house in April.'
    }},
    { mes: 'May', traduccion: 'Mayo', ejemplos: {
      present: 'We celebrate Mother’s Day in May.',
      past: 'I started a new job in May.',
      future: 'I will take a photography course in May.'
    }},
    { mes: 'June', traduccion: 'Junio', ejemplos: {
      present: 'School usually ends in June.',
      past: 'They got married in June.',
      future: 'They are going to move in June.'
    }},
    { mes: 'July', traduccion: 'Julio', ejemplos: {
      present: 'We go on vacation in July.',
      past: 'It was extremely hot last July.',
      future: 'We will visit the coast in July.'
    }},
    { mes: 'August', traduccion: 'Agosto', ejemplos: {
      present: 'It is very hot in August.',
      past: 'She learned to drive in August.',
      future: 'She is going to start lessons in August.'
    }},
    { mes: 'September', traduccion: 'Septiembre', ejemplos: {
      present: 'School starts in September.',
      past: 'I met my best friend in September.',
      future: 'I will join a gym in September.'
    }},
    { mes: 'October', traduccion: 'Octubre', ejemplos: {
      present: 'Halloween is in October.',
      past: 'We moved offices in October.',
      future: 'We are going to host a meetup in October.'
    }},
    { mes: 'November', traduccion: 'Noviembre', ejemplos: {
      present: 'Many places celebrate Thanksgiving in November.',
      past: 'They bought their first car in November.',
      future: 'They will release the app in November.'
    }},
    { mes: 'December', traduccion: 'Diciembre', ejemplos: {
      present: 'Christmas is in December.',
      past: 'It snowed a lot last December.',
      future: 'We are going to travel abroad in December.'
    }},
  ];

  esenciales = this.meses.map(m => ({ en: m.mes, es: m.traduccion }));

  mostrarSoluciones = false;

  // Práctica: complete con el MES en inglés (15 ítems)
  practica = [
    { frase: 'We will start the new sprint in ____.', solucion: 'january' },
    { frase: 'They got engaged last ____.', solucion: 'february' },
    { frase: 'Spring begins in many countries in ____.', solucion: 'march' },
    { frase: 'It often rains a lot in ____.', solucion: 'april' },
    { frase: 'Mother’s Day is celebrated in many places in ____.', solucion: 'may' },
    { frase: 'School usually ends in ____.', solucion: 'june' },
    { frase: 'We went on vacation last ____.', solucion: 'july' },
    { frase: 'It is usually very hot in ____.', solucion: 'august' },
    { frase: 'Classes start again in ____.', solucion: 'september' },
    { frase: 'Halloween is in ____.', solucion: 'october' },
    { frase: 'They will launch the product in ____.', solucion: 'november' },
    { frase: 'We are going to travel abroad in ____.', solucion: 'december' },
    { frase: 'She learned to drive in ____.', solucion: 'august' },
    { frase: 'He started a new job in ____.', solucion: 'may' },
    { frase: 'It snowed a lot last ____.', solucion: 'december' },
  ];
}
