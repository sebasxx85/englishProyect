import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Title, Meta } from '@angular/platform-browser';
import { SharedModule } from 'src/app/Shared/shared.module';

@Component({
  selector: 'app-to-be',
  standalone: true,
  // Quitamos MatTableModule (ya no hay tabla)
  imports: [CommonModule, SharedModule, MatCardModule],
  templateUrl: './to-be.component.html',
  styleUrl: './to-be.component.scss'
})
export class ToBeComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Verbo TO BE en inglés: presente y pasado con ejemplos | Biblioteca');
    this.meta.updateTag({
      name: 'description',
      content:
        'Guía del verbo to be: formas en presente (am/is/are) y pasado (was/were), contracciones, negaciones, preguntas y usos comunes. Ejemplos claros en contexto.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'to be, am is are, was were, verbo to be presente pasado, contracciones, preguntas, negaciones, gramática inglés'
    });
  }

  // Tu data original, la mostramos en una lista "tipo tabla"
  conjugaciones = [
    { pronombre: 'I',    presente: 'am', traduccionPresente: 'yo soy / estoy',        pasado: 'was',   traduccionPasado: 'yo fui / estuve' },
    { pronombre: 'You',  presente: 'are', traduccionPresente: 'tú eres / estás',      pasado: 'were',  traduccionPasado: 'tú fuiste / estuviste' },
    { pronombre: 'He',   presente: 'is', traduccionPresente: 'él es / está',          pasado: 'was',   traduccionPasado: 'él fue / estuvo' },
    { pronombre: 'She',  presente: 'is', traduccionPresente: 'ella es / está',        pasado: 'was',   traduccionPasado: 'ella fue / estuvo' },
    { pronombre: 'It',   presente: 'is', traduccionPresente: 'eso es / está',         pasado: 'was',   traduccionPasado: 'eso fue / estuvo' },
    { pronombre: 'We',   presente: 'are', traduccionPresente: 'nosotros somos/estamos', pasado: 'were', traduccionPasado: 'nosotros fuimos/estuvimos' },
    { pronombre: 'You (plural)', presente: 'are', traduccionPresente: 'ustedes son/están', pasado: 'were', traduccionPasado: 'ustedes fueron/estuvieron' },
    { pronombre: 'They', presente: 'are', traduccionPresente: 'ellos son/están',      pasado: 'were',  traduccionPasado: 'ellos fueron/estuvieron' }
  ];

  ejemplos = [
    { en: 'I am at home. / I am happy.', es: 'Estoy en casa. / Estoy feliz.' },
    { en: 'She is a doctor and he is a teacher.', es: 'Ella es doctora y él es profesor.' },
    { en: 'They were late yesterday.', es: 'Ayer llegaron tarde.' },
    { en: 'Are you ready?', es: '¿Estás listo?' },
    { en: "It wasn't cold last night.", es: 'No hizo frío anoche.' }
  ];

  contracciones = [
    "I am → I'm", "you are → you're", "he is → he's", "she is → she's", "it is → it's",
    "we are → we're", "they are → they're",
    "I am not → I'm not", "is not → isn't", "are not → aren't",
    "was not → wasn't", "were not → weren't"
  ];
}
