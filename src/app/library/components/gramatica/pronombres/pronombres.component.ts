import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pronombres',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './pronombres.component.html',
  styleUrls: ['./pronombres.component.scss']
})
export class PronombresComponent {
  columnas: string[] = ['pronombre', 'tipo', 'traduccion', 'ejemplo'];

  pronombres = [
    { pronombre: 'I', tipo: 'Personal', traduccion: 'Yo', ejemplo: 'I am a teacher.' },
    { pronombre: 'You', tipo: 'Personal', traduccion: 'Tú / Usted', ejemplo: 'You are my friend.' },
    { pronombre: 'He', tipo: 'Personal', traduccion: 'Él', ejemplo: 'He works in an office.' },
    { pronombre: 'She', tipo: 'Personal', traduccion: 'Ella', ejemplo: 'She is reading a book.' },
    { pronombre: 'It', tipo: 'Personal', traduccion: 'Eso / Ello', ejemplo: 'It is raining.' },
    { pronombre: 'We', tipo: 'Personal', traduccion: 'Nosotros(as)', ejemplo: 'We play soccer.' },
    { pronombre: 'They', tipo: 'Personal', traduccion: 'Ellos(as)', ejemplo: 'They are students.' },
    { pronombre: 'Me', tipo: 'Objeto', traduccion: 'Me / A mí', ejemplo: 'She called me yesterday.' },
    { pronombre: 'Him', tipo: 'Objeto', traduccion: 'Lo / A él', ejemplo: 'I saw him at the mall.' },
    { pronombre: 'Her', tipo: 'Objeto', traduccion: 'La / A ella', ejemplo: 'I met her in the park.' },
    { pronombre: 'Us', tipo: 'Objeto', traduccion: 'Nos', ejemplo: 'He invited us to dinner.' },
    { pronombre: 'Them', tipo: 'Objeto', traduccion: 'Los / Las / A ellos', ejemplo: 'She helped them with homework.' }
  ];
}
