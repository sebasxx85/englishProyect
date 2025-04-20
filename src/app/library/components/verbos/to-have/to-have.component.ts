import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-to-have',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './to-have.component.html',
  styleUrls: ['./to-have.component.scss']
})
export class ToHaveComponent {
  title = 'Verbo To Have (Presente y Pasado)';

  columnas: string[] = ['pronombre', 'presente', 'traduccionPresente', 'pasado', 'traduccionPasado'];

  conjugaciones = [
    { pronombre: 'I', presente: 'have', traduccionPresente: 'yo tengo', pasado: 'had', traduccionPasado: 'yo tuve' },
    { pronombre: 'You', presente: 'have', traduccionPresente: 'tú tienes', pasado: 'had', traduccionPasado: 'tú tuviste' },
    { pronombre: 'He', presente: 'has', traduccionPresente: 'él tiene', pasado: 'had', traduccionPasado: 'él tuvo' },
    { pronombre: 'She', presente: 'has', traduccionPresente: 'ella tiene', pasado: 'had', traduccionPasado: 'ella tuvo' },
    { pronombre: 'It', presente: 'has', traduccionPresente: 'eso tiene', pasado: 'had', traduccionPasado: 'eso tuvo' },
    { pronombre: 'We', presente: 'have', traduccionPresente: 'nosotros tenemos', pasado: 'had', traduccionPasado: 'nosotros tuvimos' },
    { pronombre: 'You (plural)', presente: 'have', traduccionPresente: 'ustedes tienen', pasado: 'had', traduccionPasado: 'ustedes tuvieron' },
    { pronombre: 'They', presente: 'have', traduccionPresente: 'ellos tienen', pasado: 'had', traduccionPasado: 'ellos tuvieron' }
  ];
}
