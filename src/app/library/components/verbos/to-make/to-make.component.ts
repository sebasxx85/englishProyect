import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Title, Meta } from '@angular/platform-browser';
import { SharedModule } from 'src/app/Shared/shared.module';
import { AdsenseInArticleComponent } from '../../adsense-in-article/adsense-in-article.component';
import { AdsenseFooterComponent } from '../../adsense-footer/adsense-footer.component';

@Component({
  selector: 'app-to-make',
  standalone: true,
  imports: [CommonModule, SharedModule, MatCardModule, AdsenseInArticleComponent, AdsenseFooterComponent],
  templateUrl: './to-make.component.html',
  styleUrls: ['./to-make.component.scss']
})
export class ToMakeComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Verbo TO MAKE en inglés: presente, pasado, usos y collocations | Biblioteca');
    this.meta.updateTag({
      name: 'description',
      content:
        'Guía del verbo to make: formas (make/makes, made), diferencia con to do, collocations comunes (make a decision, make money), uso causativo (make someone do), ejemplos y práctica.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'to make, makes, made, make vs do, collocations make, make someone do, gramática inglesa'
    });
  }

  conjugaciones = [
    { pronombre: 'I',    presente: 'make',  traduccionPresente: 'yo hago / creo',          pasado: 'made', traduccionPasado: 'yo hice / creé' },
    { pronombre: 'You',  presente: 'make',  traduccionPresente: 'tú haces / creas',        pasado: 'made', traduccionPasado: 'tú hiciste / creaste' },
    { pronombre: 'He',   presente: 'makes', traduccionPresente: 'él hace / crea',          pasado: 'made', traduccionPasado: 'él hizo / creó' },
    { pronombre: 'She',  presente: 'makes', traduccionPresente: 'ella hace / crea',        pasado: 'made', traduccionPasado: 'ella hizo / creó' },
    { pronombre: 'It',   presente: 'makes', traduccionPresente: 'eso hace / crea',         pasado: 'made', traduccionPasado: 'eso hizo / creó' },
    { pronombre: 'We',   presente: 'make',  traduccionPresente: 'nosotros hacemos / creamos', pasado: 'made', traduccionPasado: 'nosotros hicimos / creamos' },
    { pronombre: 'You (plural)', presente: 'make', traduccionPresente: 'ustedes hacen / crean', pasado: 'made', traduccionPasado: 'ustedes hicieron / crearon' },
    { pronombre: 'They', presente: 'make',  traduccionPresente: 'ellos hacen / crean',     pasado: 'made', traduccionPasado: 'ellos hicieron / crearon' }
  ];

  usos = [
    '<strong>Crear / producir</strong>: <em>make a cake, make a movie, make a plan</em>.',
    '<strong>Provocar / causar un efecto</strong>: <em>make me happy, make noise</em>.',
    '<strong>Ganar / generar</strong>: <em>make money, make a profit</em>.',
    '<strong>Decisiones y acuerdos</strong>: <em>make a decision, make an agreement</em>.',
    '<strong>Uso causativo</strong> (<em>make + obj + base verb</em>): <em>make someone laugh</em> (hacer reír).'
  ];

  collocationsMake = [
    'make a decision / choice',
    'make a mistake',
    'make a plan / list',
    'make money / a profit',
    'make an effort',
    'make a phone call',
    'make progress',
    'make a noise',
    'make friends',
    'make a reservation'
  ];

  phrasals = [
    '<strong>make up</strong>: inventar; reconciliarse; maquillar',
    '<strong>make out</strong>: distinguir; “entender” en contexto',
    '<strong>make over</strong>: renovar, transformar',
    '<strong>make for</strong>: dirigirse a; contribuir a'
  ];

  ejemplos = [
    { en: 'They made a great plan for the trip.', es: 'Hicieron un gran plan para el viaje.' },
    { en: 'This song makes me happy.', es: 'Esta canción me hace feliz.' },
    { en: 'We made a reservation for 8 pm.', es: 'Hicimos una reserva para las 8 p. m.' },
    { en: 'The company made a profit last year.', es: 'La empresa obtuvo ganancias el año pasado.' },
    { en: 'She made me laugh with her story.', es: 'Ella me hizo reír con su historia.' }
  ];
}
