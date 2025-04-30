import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-presente-simple',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './presente-simple.component.html',
  styleUrls: ['./presente-simple.component.scss']
})
export class PresenteSimpleComponent {
  columnas: string[] = ['pronombre', 'verboBase', 'verboPresente', 'tipo', 'ejemplo'];

  oraciones = [
    { pronombre: 'I', verboBase: 'play', verboPresente: 'play', tipo: 'Afirmativa', ejemplo: 'I play soccer every Sunday.' },
    { pronombre: 'He', verboBase: 'go', verboPresente: 'goes', tipo: 'Afirmativa', ejemplo: 'He goes to school at 8 AM.' },
    { pronombre: 'She', verboBase: 'watch', verboPresente: 'watches', tipo: 'Afirmativa', ejemplo: 'She watches TV at night.' },
    { pronombre: 'We', verboBase: 'study', verboPresente: 'study', tipo: 'Afirmativa', ejemplo: 'We study English on Mondays.' },
    { pronombre: 'You', verboBase: 'read', verboPresente: 'read', tipo: 'Afirmativa', ejemplo: 'You read fast.' },
    { pronombre: 'They', verboBase: 'work', verboPresente: 'work', tipo: 'Afirmativa', ejemplo: 'They work in an office.' },

    { pronombre: 'He', verboBase: 'like', verboPresente: 'likes', tipo: 'Negativa', ejemplo: 'He doesn’t like coffee.' },
    { pronombre: 'She', verboBase: 'eat', verboPresente: 'eats', tipo: 'Negativa', ejemplo: 'She doesn’t eat meat.' },
    { pronombre: 'I', verboBase: 'drink', verboPresente: 'drink', tipo: 'Negativa', ejemplo: 'I don’t drink soda.' },
    { pronombre: 'We', verboBase: 'have', verboPresente: 'have', tipo: 'Negativa', ejemplo: 'We don’t have class today.' },

    { pronombre: 'Do you', verboBase: 'play', verboPresente: 'play', tipo: 'Pregunta', ejemplo: 'Do you play video games?' },
    { pronombre: 'Does he', verboBase: 'work', verboPresente: 'work', tipo: 'Pregunta', ejemplo: 'Does he work on weekends?' },
    { pronombre: 'Do they', verboBase: 'study', verboPresente: 'study', tipo: 'Pregunta', ejemplo: 'Do they study together?' }
  ];
}
