import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-preposiciones',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './preposiciones.component.html',
  styleUrls: ['./preposiciones.component.scss']
})
export class PreposicionesComponent {
  columnas: string[] = ['preposicion', 'traduccion', 'uso', 'ejemplo'];

  preposiciones = [
    { preposicion: 'in', traduccion: 'en, dentro de', uso: 'Ubicación dentro', ejemplo: 'The keys are in the bag.' },
    { preposicion: 'on', traduccion: 'sobre, encima de', uso: 'Ubicación sobre una superficie', ejemplo: 'The book is on the table.' },
    { preposicion: 'under', traduccion: 'debajo de', uso: 'Posición inferior', ejemplo: 'The cat is under the bed.' },
    { preposicion: 'above', traduccion: 'encima de', uso: 'A mayor altura (sin contacto)', ejemplo: 'The clock is above the door.' },
    { preposicion: 'below', traduccion: 'debajo de', uso: 'A menor altura (sin contacto)', ejemplo: 'The painting is below the window.' },
    { preposicion: 'next to', traduccion: 'al lado de', uso: 'Ubicación cercana', ejemplo: 'The lamp is next to the sofa.' },
    { preposicion: 'between', traduccion: 'entre (dos)', uso: 'Posición entre dos objetos', ejemplo: 'The ball is between the shoes.' },
    { preposicion: 'behind', traduccion: 'detrás de', uso: 'Posición posterior', ejemplo: 'The car is behind the truck.' },
    { preposicion: 'in front of', traduccion: 'delante de', uso: 'Posición frontal', ejemplo: 'The bike is in front of the house.' },
    { preposicion: 'over', traduccion: 'sobre', uso: 'Movimiento por encima', ejemplo: 'The plane flew over the city.' },
    { preposicion: 'into', traduccion: 'dentro de (movimiento)', uso: 'Movimiento hacia el interior', ejemplo: 'She went into the room.' },
    { preposicion: 'out of', traduccion: 'fuera de', uso: 'Movimiento hacia el exterior', ejemplo: 'He walked out of the store.' },
    { preposicion: 'at', traduccion: 'en (lugar específico)', uso: 'Ubicación general o específica', ejemplo: 'He is at the door.' },
    { preposicion: 'from', traduccion: 'de, desde', uso: 'Origen o punto de partida', ejemplo: 'I’m coming from school.' },
    { preposicion: 'to', traduccion: 'a, hacia', uso: 'Destino o dirección', ejemplo: 'We are going to the park.' },
    { preposicion: 'by', traduccion: 'junto a / por', uso: 'Cerca de / medio', ejemplo: 'The book was written by her.' },
    { preposicion: 'with', traduccion: 'con', uso: 'Compañía o instrumento', ejemplo: 'I went with my friends.' },
    { preposicion: 'without', traduccion: 'sin', uso: 'Ausencia', ejemplo: 'He left without his phone.' },
    { preposicion: 'for', traduccion: 'para, por', uso: 'Propósito o destinatario', ejemplo: 'This gift is for you.' },
    { preposicion: 'about', traduccion: 'sobre, acerca de', uso: 'Tema o asunto', ejemplo: 'We talked about the movie.' }
  ];
}
