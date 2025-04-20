import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-meses',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.scss']
})
export class MesesComponent {
  columnas: string[] = ['mes', 'traduccion', 'ejemplo'];

  meses = [
    { mes: 'January', traduccion: 'Enero', ejemplo: 'My birthday is in January.' },
    { mes: 'February', traduccion: 'Febrero', ejemplo: 'Valentine\'s Day is in February.' },
    { mes: 'March', traduccion: 'Marzo', ejemplo: 'Spring begins in March.' },
    { mes: 'April', traduccion: 'Abril', ejemplo: 'It often rains in April.' },
    { mes: 'May', traduccion: 'Mayo', ejemplo: 'We celebrate Mother\'s Day in May.' },
    { mes: 'June', traduccion: 'Junio', ejemplo: 'School ends in June.' },
    { mes: 'July', traduccion: 'Julio', ejemplo: 'We go on vacation in July.' },
    { mes: 'August', traduccion: 'Agosto', ejemplo: 'It is very hot in August.' },
    { mes: 'September', traduccion: 'Septiembre', ejemplo: 'School starts in September.' },
    { mes: 'October', traduccion: 'Octubre', ejemplo: 'Halloween is in October.' },
    { mes: 'November', traduccion: 'Noviembre', ejemplo: 'Thanksgiving is in November.' },
    { mes: 'December', traduccion: 'Diciembre', ejemplo: 'Christmas is in December.' }
  ];
}
