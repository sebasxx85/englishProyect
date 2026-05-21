import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AdsenseInArticleComponent } from '../../adsense-in-article/adsense-in-article.component';
import { AdsenseFooterComponent } from '../../adsense-footer/adsense-footer.component';


interface EntradaParte {
  parte: string;
  traduccion: string;
  ejemplo: string;
}

@Component({
    selector: 'app-cuerpo',
    imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule,
        MatDividerModule, AdsenseInArticleComponent, AdsenseFooterComponent],
    templateUrl: './cuerpo-humano.component.html',
    styleUrls: ['./cuerpo-humano.component.scss']
})
export class PartesCuerpoComponent {
  title = 'Partes del cuerpo en inglés';

  partes: EntradaParte[] = [
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
    { parte: 'Back', traduccion: 'Espalda', ejemplo: 'My back is sore today.' },
    { parte: 'Leg', traduccion: 'Pierna', ejemplo: 'She injured her leg.' },
    { parte: 'Knee', traduccion: 'Rodilla', ejemplo: 'He bent his knee.' },
    { parte: 'Foot', traduccion: 'Pie', ejemplo: 'My foot is sore.' },
    { parte: 'Toe', traduccion: 'Dedo (pie)', ejemplo: 'He stubbed his toe.' }
  ];

  esenciales = [
    'Head','Face','Eye','Ear','Nose','Mouth','Hand','Arm','Leg','Foot'
  ].map(en => this.partes.find(p => p.parte === en)!).filter(Boolean) as EntradaParte[];

  mostrarSoluciones = false;

  // 15 ejercicios (complete con la parte del cuerpo en inglés)
  practica = [
    { frase: 'Brush your ____ every day.', solucion: 'teeth' },
    { frase: 'Raise your ____ to ask a question.', solucion: 'hand' },
    { frase: 'He broke his ____ playing football.', solucion: 'arm' },
    { frase: 'She has green ____.', solucion: 'eyes' },
    { frase: 'I have a pain in my ____.', solucion: 'back' },
    { frase: 'Open your ____ wide.', solucion: 'mouth' },
    { frase: 'He bent his ____ carefully.', solucion: 'knee' },
    { frase: 'My ____ is stuffy today.', solucion: 'nose' },
    { frase: 'Her ____ is long and curly.', solucion: 'hair' },
    { frase: 'He cut his ____ while cooking.', solucion: 'finger' },
    { frase: 'I have an ____ache.', solucion: 'ear' },
    { frase: 'She hurt her ____ at the gym.', solucion: 'shoulder' },
    { frase: 'My ____ hurts after lunch.', solucion: 'stomach' },
    { frase: 'Be careful, don’t hit your ____.', solucion: 'head' },
    { frase: 'He stubbed his ____ on the table.', solucion: 'toe' }
  ];
}
