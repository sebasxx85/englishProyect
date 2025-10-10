import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Verbo TO DO en inglés: usos, presente y pasado | Biblioteca');
    this.meta.updateTag({
      name: 'description',
      content:
        'Guía del verbo to do: conjugación en presente y pasado, usos como verbo principal y auxiliar, contracciones, preguntas y negaciones con ejemplos claros.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'to do, does, did, do not, does not, did not, verbo to do inglés, auxiliar do, gramática inglesa'
    });
  }

  conjugaciones = [
    { pronombre: 'I', presente: 'do', traduccionPresente: 'yo hago', pasado: 'did', traduccionPasado: 'yo hice' },
    { pronombre: 'You', presente: 'do', traduccionPresente: 'tú haces', pasado: 'did', traduccionPasado: 'tú hiciste' },
    { pronombre: 'He', presente: 'does', traduccionPresente: 'él hace', pasado: 'did', traduccionPasado: 'él hizo' },
    { pronombre: 'She', presente: 'does', traduccionPresente: 'ella hace', pasado: 'did', traduccionPasado: 'ella hizo' },
    { pronombre: 'It', presente: 'does', traduccionPresente: 'eso hace', pasado: 'did', traduccionPasado: 'eso hizo' },
    { pronombre: 'We', presente: 'do', traduccionPresente: 'nosotros hacemos', pasado: 'did', traduccionPasado: 'nosotros hicimos' },
    { pronombre: 'You (plural)', presente: 'do', traduccionPresente: 'ustedes hacen', pasado: 'did', traduccionPasado: 'ustedes hicieron' },
    { pronombre: 'They', presente: 'do', traduccionPresente: 'ellos hacen', pasado: 'did', traduccionPasado: 'ellos hicieron' }
  ];

  ejemplos = [
    { en: 'I do my homework every day.', es: 'Hago mi tarea todos los días.' },
    { en: 'She does yoga in the morning.', es: 'Ella hace yoga por la mañana.' },
    { en: 'We did our best in the exam.', es: 'Hicimos lo mejor que pudimos en el examen.' },
    { en: 'Do you like coffee?', es: '¿Te gusta el café?' },
    { en: "He doesn’t work on weekends.", es: 'Él no trabaja los fines de semana.' }
  ];

  usos = [
    'Como verbo principal: expresar una acción (“hacer”).',
    'Como verbo auxiliar: formar preguntas y negaciones en presente y pasado.',
    'Para enfatizar: “I <em>do</em> like English!” (¡De verdad me gusta el inglés!).'
  ];
}
