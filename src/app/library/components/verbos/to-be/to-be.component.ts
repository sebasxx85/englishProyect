import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/Shared/shared.module';

@Component({
  selector: 'app-to-be',
  standalone: true,
    imports: [CommonModule, SharedModule, MatTableModule, MatCardModule],
  templateUrl: './to-be.component.html',
  styleUrl: './to-be.component.scss'
})
export class ToBeComponent {

  columnas: string[] = ['pronombre', 'presente', 'traduccionPresente', 'pasado', 'traduccionPasado'];

  conjugaciones = [
    { pronombre: 'I', presente: 'am', traduccionPresente: 'yo soy / estoy', pasado: 'was', traduccionPasado: 'yo fui / estuve' },
    { pronombre: 'You', presente: 'are', traduccionPresente: 'tú eres / estás', pasado: 'were', traduccionPasado: 'tú fuiste / estuviste' },
    { pronombre: 'He', presente: 'is', traduccionPresente: 'él es / está', pasado: 'was', traduccionPasado: 'él fue / estuvo' },
    { pronombre: 'She', presente: 'is', traduccionPresente: 'ella es / está', pasado: 'was', traduccionPasado: 'ella fue / estuvo' },
    { pronombre: 'It', presente: 'is', traduccionPresente: 'eso es / está', pasado: 'was', traduccionPasado: 'eso fue / estuvo' },
    { pronombre: 'We', presente: 'are', traduccionPresente: 'nosotros somos / estamos', pasado: 'were', traduccionPasado: 'nosotros fuimos / estuvimos' },
    { pronombre: 'You (plural)', presente: 'are', traduccionPresente: 'ustedes son / están', pasado: 'were', traduccionPasado: 'ustedes fueron / estuvieron' },
    { pronombre: 'They', presente: 'are', traduccionPresente: 'ellos son / están', pasado: 'were', traduccionPasado: 'ellos fueron / estuvieron' }
  ];
  
}
