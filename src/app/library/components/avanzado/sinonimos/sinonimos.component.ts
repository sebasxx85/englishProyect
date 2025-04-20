import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/Shared/shared.module';

@Component({
  selector: 'app-sinonimos',
  standalone: true,
   imports: [CommonModule, SharedModule, MatTableModule, MatCardModule],
  templateUrl: './sinonimos.component.html',
  styleUrl: './sinonimos.component.scss'
})
export class SinonimosComponent {

  columnas: string[] = ['palabra', 'sinonimo'];

  sinonimos = [
    { palabra: 'big (grande)', sinonimo: 'large (grande)' },
    { palabra: 'small (pequeño)', sinonimo: 'tiny (diminuto)' },
    { palabra: 'happy (feliz)', sinonimo: 'joyful (alegre)' },
    { palabra: 'sad (triste)', sinonimo: 'unhappy (infeliz)' },
    { palabra: 'fast (rápido)', sinonimo: 'quick (veloz)' },
    { palabra: 'slow (lento)', sinonimo: 'sluggish (pausado)' },
    { palabra: 'smart (inteligente)', sinonimo: 'clever (listo)' },
    { palabra: 'angry (enojado)', sinonimo: 'mad (furioso)' },
    { palabra: 'cold (frío)', sinonimo: 'chilly (fresco)' },
    { palabra: 'hot (caliente)', sinonimo: 'warm (templado)' },
    { palabra: 'pretty (bonita)', sinonimo: 'beautiful (hermosa)' },
    { palabra: 'rich (rico)', sinonimo: 'wealthy (adinerado)' },
    { palabra: 'funny (divertido)', sinonimo: 'humorous (gracioso)' },
    { palabra: 'strong (fuerte)', sinonimo: 'powerful (poderoso)' },
    { palabra: 'clean (limpio)', sinonimo: 'neat (aseado)' },
    { palabra: 'tired (cansado)', sinonimo: 'exhausted (agotado)' },
    { palabra: 'begin (empezar)', sinonimo: 'start (iniciar)' },
    { palabra: 'end (terminar)', sinonimo: 'finish (finalizar)' },
    { palabra: 'idea (idea)', sinonimo: 'thought (pensamiento)' },
    { palabra: 'look (mirar)', sinonimo: 'glance (observar)' }
  ];


}