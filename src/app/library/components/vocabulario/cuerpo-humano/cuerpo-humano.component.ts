import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-cuerpo',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './cuerpo-humano.component.html',
  styleUrl: './cuerpo-humano.component.scss'
})
export class PartesCuerpoComponent {
  columnas: string[] = ['parte', 'traduccion', 'ejemplo'];

  partes = [
    { parte: 'Head', traduccion: 'Cabeza', ejemplo: 'He has a headache.' },
    { parte: 'Hair', traduccion: 'Cabello', ejemplo: 'Her hair is long and curly.' },
    { parte: 'Face', traduccion: 'Cara', ejemplo: 'He has a friendly face.' },
    { parte: 'Eye', traduccion: 'Ojo', ejemplo: 'She has green eyes.' },
    { parte: 'Ear', traduccion: 'Oreja', ejemplo: 'I have an earache.' },
    { parte: 'Nose', traduccion: 'Nariz', ejemplo: 'My nose is stuffy.' },
    { parte: 'Mouth', traduccion: 'Boca', ejemplo: 'Open your mouth wide.' },
    { parte: 'Teeth', traduccion: 'Dientes', ejemplo: 'Brush your teeth every day.' },
    { parte: 'Neck', traduccion: 'Cuello', ejemplo: 'I have neck pain.' },
    { parte: 'Shoulder', traduccion: 'Hombro', ejemplo: 'She hurt her shoulder.' },
    { parte: 'Arm', traduccion: 'Brazo', ejemplo: 'He broke his arm.' },
    { parte: 'Elbow', traduccion: 'Codo', ejemplo: 'Bend your elbow slowly.' },
    { parte: 'Hand', traduccion: 'Mano', ejemplo: 'Raise your hand.' },
    { parte: 'Finger', traduccion: 'Dedo (mano)', ejemplo: 'He cut his finger.' },
    { parte: 'Chest', traduccion: 'Pecho', ejemplo: 'He felt pain in his chest.' },
    { parte: 'Stomach', traduccion: 'Estómago', ejemplo: 'My stomach hurts.' },
    { parte: 'Leg', traduccion: 'Pierna', ejemplo: 'She injured her leg.' },
    { parte: 'Knee', traduccion: 'Rodilla', ejemplo: 'He bent his knee.' },
    { parte: 'Foot', traduccion: 'Pie', ejemplo: 'My foot is sore.' },
    { parte: 'Toe', traduccion: 'Dedo (pie)', ejemplo: 'He stubbed his toe.' }
  ];
}