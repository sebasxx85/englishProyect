import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-to-have',
  standalone: true,
  // Ya no usamos MatTableModule (no hay <table>)
  imports: [CommonModule, MatCardModule],
  templateUrl: './to-have.component.html',
  styleUrls: ['./to-have.component.scss']
})
export class ToHaveComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Verbo TO HAVE en inglés: presente, pasado y usos | Biblioteca');
    this.meta.updateTag({
      name: 'description',
      content:
        'Guía del verbo to have: formas en presente (have/has) y pasado (had), posesión, expresiones frecuentes, “have to” (obligación), uso como auxiliar en los tiempos perfectos, ejemplos y práctica.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'to have, has, had, have got, have to, present perfect, verbo to have en inglés, posesión, auxiliar'
    });
  }

  conjugaciones = [
    { pronombre: 'I',    presente: 'have', traduccionPresente: 'yo tengo',             pasado: 'had', traduccionPasado: 'yo tuve' },
    { pronombre: 'You',  presente: 'have', traduccionPresente: 'tú tienes',            pasado: 'had', traduccionPasado: 'tú tuviste' },
    { pronombre: 'He',   presente: 'has',  traduccionPresente: 'él tiene',             pasado: 'had', traduccionPasado: 'él tuvo' },
    { pronombre: 'She',  presente: 'has',  traduccionPresente: 'ella tiene',           pasado: 'had', traduccionPasado: 'ella tuvo' },
    { pronombre: 'It',   presente: 'has',  traduccionPresente: 'eso tiene',            pasado: 'had', traduccionPasado: 'eso tuvo' },
    { pronombre: 'We',   presente: 'have', traduccionPresente: 'nosotros tenemos',     pasado: 'had', traduccionPasado: 'nosotros tuvimos' },
    { pronombre: 'You (plural)', presente: 'have', traduccionPresente: 'ustedes tienen', pasado: 'had', traduccionPasado: 'ustedes tuvieron' },
    { pronombre: 'They', presente: 'have', traduccionPresente: 'ellos tienen',         pasado: 'had', traduccionPasado: 'ellos tuvieron' }
  ];

  usos = [
    '<strong>Posesión</strong>: <em>have a car</em>, <em>has a dog</em>.',
    '<strong>Relaciones / rasgos</strong>: <em>have a brother</em>, <em>have blue eyes</em>.',
    '<strong>Experiencias / actividades</strong>: <em>have breakfast</em>, <em>have a meeting</em>, <em>have fun</em>.',
    '<strong>Obligación con</strong> <em>have to</em>: <em>I have to study</em> (tengo que estudiar).',
    '<strong>Como auxiliar</strong> (tiempos perfectos): <em>have/has/had + participio</em> → <em>have seen</em>, <em>had finished</em>.'
  ];

  estructuras = [
    '<em>have + noun</em> (posesión/actividad): <em>have time, have lunch</em>.',
    '<em>have got + noun</em> (variante coloquial de posesión, UK/uso informal): <em>I\'ve got a car</em>.',
    '<em>have to + base verb</em> (obligación): <em>She has to work</em>.',
    '<em>have/has + past participle</em> (present perfect): <em>They have finished</em>.',
    '<em>had + past participle</em> (past perfect): <em>We had left</em>.'
  ];

  ejemplos = [
    { en: 'I have two sisters.', es: 'Tengo dos hermanas.' },
    { en: "She has to get up early.", es: 'Ella tiene que levantarse temprano.' },
    { en: "They've got a new laptop.", es: 'Ellos tienen un portátil nuevo.' },
    { en: 'He has finished his homework.', es: 'Él ha terminado su tarea.' },
    { en: 'We had already eaten when you arrived.', es: 'Ya habíamos comido cuando llegaste.' }
  ];
}
