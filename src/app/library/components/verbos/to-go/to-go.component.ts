import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-to-go',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './to-go.component.html',
  styleUrls: ['./to-go.component.scss']
})
export class ToGoComponent {
  title = 'Verbo To Go (Presente y Pasado)';

  columnas: string[] = ['pronombre', 'presente', 'traduccionPresente', 'pasado', 'traduccionPasado'];

  conjugaciones = [
    { pronombre: 'I', presente: 'go', traduccionPresente: 'yo voy', pasado: 'went', traduccionPasado: 'yo fui' },
    { pronombre: 'You', presente: 'go', traduccionPresente: 'tú vas', pasado: 'went', traduccionPasado: 'tú fuiste' },
    { pronombre: 'He', presente: 'goes', traduccionPresente: 'él va', pasado: 'went', traduccionPasado: 'él fue' },
    { pronombre: 'She', presente: 'goes', traduccionPresente: 'ella va', pasado: 'went', traduccionPasado: 'ella fue' },
    { pronombre: 'It', presente: 'goes', traduccionPresente: 'eso va', pasado: 'went', traduccionPasado: 'eso fue' },
    { pronombre: 'We', presente: 'go', traduccionPresente: 'nosotros vamos', pasado: 'went', traduccionPasado: 'nosotros fuimos' },
    { pronombre: 'You (plural)', presente: 'go', traduccionPresente: 'ustedes van', pasado: 'went', traduccionPasado: 'ustedes fueron' },
    { pronombre: 'They', presente: 'go', traduccionPresente: 'ellos van', pasado: 'went', traduccionPasado: 'ellos fueron' }
  ];
}
