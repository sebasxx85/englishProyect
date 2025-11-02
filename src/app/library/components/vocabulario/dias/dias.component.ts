import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AdsenseInArticleComponent } from '../../adsense-in-article/adsense-in-article.component';
import { AdsenseFooterComponent } from '../../adsense-footer/adsense-footer.component';

interface DiaItem {
  dia: string;
  traduccion: string;
  ejemplos: {
    present: string;   // Presente (rutina/hábito)
    past: string;      // Pasado simple
    future: string;    // Futuro (will / going to)
  };
}

@Component({
  selector: 'app-dias',
  standalone: true,
    imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule, 
            MatDividerModule, AdsenseInArticleComponent, AdsenseFooterComponent],
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.scss']
})
export class DiasComponent {
  title = 'Días de la semana en inglés';

  dias: DiaItem[] = [
    {
      dia: 'Monday', traduccion: 'Lunes',
      ejemplos: {
        present: 'I work out on Monday.',
        past: 'I finished the report last Monday.',
        future: 'I will start the new course next Monday.'
      }
    },
    {
      dia: 'Tuesday', traduccion: 'Martes',
      ejemplos: {
        present: 'We have English class on Tuesday.',
        past: 'We met the team last Tuesday.',
        future: 'We are going to visit the museum next Tuesday.'
      }
    },
    {
      dia: 'Wednesday', traduccion: 'Miércoles',
      ejemplos: {
        present: 'She plays soccer on Wednesday.',
        past: 'She had an exam last Wednesday.',
        future: 'She will present her project next Wednesday.'
      }
    },
    {
      dia: 'Thursday', traduccion: 'Jueves',
      ejemplos: {
        present: 'He works late on Thursday.',
        past: 'He traveled to Lima last Thursday.',
        future: 'He is going to cook dinner next Thursday.'
      }
    },
    {
      dia: 'Friday', traduccion: 'Viernes',
      ejemplos: {
        present: 'They go out on Friday night.',
        past: 'They watched a movie last Friday.',
        future: 'They will celebrate next Friday.'
      }
    },
    {
      dia: 'Saturday', traduccion: 'Sábado',
      ejemplos: {
        present: 'We watch movies on Saturday.',
        past: 'We visited our grandparents last Saturday.',
        future: 'We are going to hike next Saturday.'
      }
    },
    {
      dia: 'Sunday', traduccion: 'Domingo',
      ejemplos: {
        present: 'Sunday is a day to rest.',
        past: 'It rained all day last Sunday.',
        future: 'It will be sunny next Sunday.'
      }
    }
  ];

  esenciales = this.dias.map(d => ({ en: d.dia, es: d.traduccion }));

  mostrarSoluciones = false;

  // Práctica: complete con el DÍA en inglés (12 ítems)
  practica = [
    { frase: 'We have a meeting ____ morning. (la próxima semana)', solucion: 'monday' },
    { frase: 'They played tennis last ____.', solucion: 'tuesday' },
    { frase: 'She will take the test next ____.', solucion: 'wednesday' },
    { frase: 'I usually study on ____ evenings.', solucion: 'thursday' },
    { frase: 'We went to the concert last ____ night.', solucion: 'friday' },
    { frase: 'We are going to travel next ____.', solucion: 'saturday' },
    { frase: '____ is usually our family day.', solucion: 'sunday' },
    { frase: 'I had a doctor’s appointment last ____.', solucion: 'monday' },
    { frase: 'He will start the project on ____.', solucion: 'tuesday' },
    { frase: 'They often train on ____.', solucion: 'wednesday' },
    { frase: 'She finished the book last ____.', solucion: 'thursday' },
    { frase: 'We will celebrate her birthday next ____.', solucion: 'friday' }
  ];
}
