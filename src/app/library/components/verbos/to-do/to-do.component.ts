import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {


  columnas: string[] = ['pronombre', 'presente', 'traduccionPresente', 'pasado', 'traduccionPasado'];

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
}
