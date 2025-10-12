import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-to-get',
  standalone: true,
  // Quitamos MatTableModule: ya no usamos tabla
  imports: [CommonModule, MatCardModule],
  templateUrl: './to-get.component.html',
  styleUrls: ['./to-get.component.scss']
})
export class ToGetComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Verbo TO GET en inglés: presente, pasado y usos | Biblioteca');
    this.meta.updateTag({
      name: 'description',
      content:
        'Guía del verbo to get: formas en presente y pasado, significados más comunes (obtener, recibir, llegar, volverse), estructuras frecuentes, phrasal verbs, ejemplos y práctica.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'to get, gets, got, verbo to get, get + adjective, get to, get done, phrasal verbs con get'
    });
  }

  columnas: string[] = ['pronombre', 'presente', 'traduccionPresente', 'pasado', 'traduccionPasado'];

  conjugaciones = [
    { pronombre: 'I',    presente: 'get',  traduccionPresente: 'yo consigo / obtengo',                 pasado: 'got', traduccionPasado: 'yo conseguí / obtuve' },
    { pronombre: 'You',  presente: 'get',  traduccionPresente: 'tú consigues / obtienes',              pasado: 'got', traduccionPasado: 'tú conseguiste / obtuviste' },
    { pronombre: 'He',   presente: 'gets', traduccionPresente: 'él consigue / obtiene',                pasado: 'got', traduccionPasado: 'él consiguió / obtuvo' },
    { pronombre: 'She',  presente: 'gets', traduccionPresente: 'ella consigue / obtiene',              pasado: 'got', traduccionPasado: 'ella consiguió / obtuvo' },
    { pronombre: 'It',   presente: 'gets', traduccionPresente: 'eso consigue / obtiene',               pasado: 'got', traduccionPasado: 'eso consiguió / obtuvo' },
    { pronombre: 'We',   presente: 'get',  traduccionPresente: 'nosotros conseguimos / obtenemos',     pasado: 'got', traduccionPasado: 'nosotros conseguimos / obtuvimos' },
    { pronombre: 'You (plural)', presente: 'get',  traduccionPresente: 'ustedes consiguen / obtienen', pasado: 'got', traduccionPasado: 'ustedes consiguieron / obtuvieron' },
    { pronombre: 'They', presente: 'get',  traduccionPresente: 'ellos consiguen / obtienen',           pasado: 'got', traduccionPasado: 'ellos consiguieron / obtuvieron' }
  ];

  usos = [
    '<strong>Obtener / conseguir / recibir</strong>: <em>get a job, get a ticket, get a message</em>.',
    '<strong>Llegar</strong>: <em>get to the station at 9</em> (llegar a la estación a las 9).',
    '<strong>Volverse / ponerse</strong> (cambio de estado con adjetivo): <em>get tired, get sick, get angry</em>.',
    '<strong>Entender</strong>: <em>I get it</em> (lo entiendo).',
    '<strong>Lograr</strong> (con infinitivo): <em>get to meet</em> (llegar a conocer / lograr conocer).',
    '<strong>Hacer que (causativo)</strong>: <em>get something done</em> (hacer que algo sea hecho).'
  ];

  estructuras = [
    '<em>get + adjective</em>: <em>get ready / get old / get busy</em>.',
    '<em>get + noun</em>: <em>get a promotion / get a chance</em>.',
    '<em>get + to + place</em>: <em>get to work / get to school</em>.',
    '<em>get + object + past participle</em> (causativo): <em>get the car fixed</em> (hacer arreglar el auto).',
    '<em>get + infinitive</em>: <em>get to see</em> (llegar a ver / tener la oportunidad de ver).'
  ];

  phrasals = [
    '<strong>get up</strong>: levantarse',
    '<strong>get on/off</strong>: subir/bajar (transporte)',
    '<strong>get back</strong>: regresar / recuperar',
    '<strong>get along (with)</strong>: llevarse bien (con)',
    '<strong>get over</strong>: superar (una enfermedad/una situación)',
    '<strong>get into</strong>: meterse en / interesarse por'
  ];

  ejemplos = [
    { en: 'I usually get home at 7 pm.', es: 'Normalmente llego a casa a las 7 p. m.' },
    { en: 'She got a new job last month.', es: 'Ella consiguió un nuevo trabajo el mes pasado.' },
    { en: 'It is getting cold outside.', es: 'Afuera se está poniendo frío.' },
    { en: 'Do you get it?', es: '¿Lo entiendes?' },
    { en: 'We got the car fixed yesterday.', es: 'Hicimos arreglar el auto ayer.' }
  ];
}
