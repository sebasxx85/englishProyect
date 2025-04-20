import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-to-make',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './to-make.component.html',
  styleUrls: ['./to-make.component.scss']
})
export class ToMakeComponent {
  title = 'Verbo To Make (Presente y Pasado)';
  columnas: string[] = ['pronombre', 'presente', 'traduccionPresente', 'pasado', 'traduccionPasado'];
  conjugaciones = [
    { pronombre: 'I', presente: 'make', traduccionPresente: 'yo hago / creo', pasado: 'made', traduccionPasado: 'yo hice / creé' },
    { pronombre: 'You', presente: 'make', traduccionPresente: 'tú haces / creas', pasado: 'made', traduccionPasado: 'tú hiciste / creaste' },
    { pronombre: 'He', presente: 'makes', traduccionPresente: 'él hace / crea', pasado: 'made', traduccionPasado: 'él hizo / creó' },
    { pronombre: 'She', presente: 'makes', traduccionPresente: 'ella hace / crea', pasado: 'made', traduccionPasado: 'ella hizo / creó' },
    { pronombre: 'It', presente: 'makes', traduccionPresente: 'eso hace / crea', pasado: 'made', traduccionPasado: 'eso hizo / creó' },
    { pronombre: 'We', presente: 'make', traduccionPresente: 'nosotros hacemos / creamos', pasado: 'made', traduccionPasado: 'nosotros hicimos / creamos' },
    { pronombre: 'You (plural)', presente: 'make', traduccionPresente: 'ustedes hacen / crean', pasado: 'made', traduccionPasado: 'ustedes hicieron / crearon' },
    { pronombre: 'They', presente: 'make', traduccionPresente: 'ellos hacen / crean', pasado: 'made', traduccionPasado: 'ellos hicieron / crearon' }
  ];
}
