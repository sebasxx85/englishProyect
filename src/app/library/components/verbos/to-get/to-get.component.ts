import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-to-get',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './to-get.component.html',
  styleUrls: ['./to-get.component.scss']
})
export class ToGetComponent {


  columnas: string[] = ['pronombre', 'presente', 'traduccionPresente', 'pasado', 'traduccionPasado'];

  conjugaciones = [
    { pronombre: 'I', presente: 'get', traduccionPresente: 'yo consigo / obtengo', pasado: 'got', traduccionPasado: 'yo conseguí / obtuve' },
    { pronombre: 'You', presente: 'get', traduccionPresente: 'tú consigues / obtienes', pasado: 'got', traduccionPasado: 'tú conseguiste / obtuviste' },
    { pronombre: 'He', presente: 'gets', traduccionPresente: 'él consigue / obtiene', pasado: 'got', traduccionPasado: 'él consiguió / obtuvo' },
    { pronombre: 'She', presente: 'gets', traduccionPresente: 'ella consigue / obtiene', pasado: 'got', traduccionPasado: 'ella consiguió / obtuvo' },
    { pronombre: 'It', presente: 'gets', traduccionPresente: 'eso consigue / obtiene', pasado: 'got', traduccionPasado: 'eso consiguió / obtuvo' },
    { pronombre: 'We', presente: 'get', traduccionPresente: 'nosotros conseguimos / obtenemos', pasado: 'got', traduccionPasado: 'nosotros conseguimos / obtuvimos' },
    { pronombre: 'You (plural)', presente: 'get', traduccionPresente: 'ustedes consiguen / obtienen', pasado: 'got', traduccionPasado: 'ustedes consiguieron / obtuvieron' },
    { pronombre: 'They', presente: 'get', traduccionPresente: 'ellos consiguen / obtienen', pasado: 'got', traduccionPasado: 'ellos consiguieron / obtuvieron' }
  ];
}
