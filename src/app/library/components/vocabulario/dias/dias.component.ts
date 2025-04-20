import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dias',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.scss']
})
export class DiasComponent {
  columnas: string[] = ['dia', 'traduccion', 'ejemplo'];

  dias = [
    { dia: 'Monday', traduccion: 'Lunes', ejemplo: 'I go to school on Monday.' },
    { dia: 'Tuesday', traduccion: 'Martes', ejemplo: 'We have English class on Tuesday.' },
    { dia: 'Wednesday', traduccion: 'Miércoles', ejemplo: 'She plays soccer on Wednesday.' },
    { dia: 'Thursday', traduccion: 'Jueves', ejemplo: 'He works late on Thursday.' },
    { dia: 'Friday', traduccion: 'Viernes', ejemplo: 'They go out on Friday night.' },
    { dia: 'Saturday', traduccion: 'Sábado', ejemplo: 'We watch movies on Saturday.' },
    { dia: 'Sunday', traduccion: 'Domingo', ejemplo: 'Sunday is a day to rest.' }
  ];
}
