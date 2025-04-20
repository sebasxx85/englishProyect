import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/Shared/shared.module';

@Component({
  selector: 'app-antonimos',
  standalone: true,
  imports: [CommonModule, SharedModule, MatTableModule, MatCardModule],
  templateUrl: './antonimos.component.html',
  styleUrl: './antonimos.component.scss'
})
export class AntonimosComponent {

  columnas: string[] = ['palabra', 'antonimo'];

  antonimos = [
    { palabra: 'up (arriba)', antonimo: 'down (abajo)' },
    { palabra: 'big (grande)', antonimo: 'small (pequeño)' },
    { palabra: 'hot (caliente)', antonimo: 'cold (frío)' },
    { palabra: 'fast (rápido)', antonimo: 'slow (lento)' },
    { palabra: 'happy (feliz)', antonimo: 'sad (triste)' },
    { palabra: 'young (joven)', antonimo: 'old (viejo)' },
    { palabra: 'light (claro)', antonimo: 'dark (oscuro)' },
    { palabra: 'clean (limpio)', antonimo: 'dirty (sucio)' },
    { palabra: 'open (abierto)', antonimo: 'closed (cerrado)' },
    { palabra: 'early (temprano)', antonimo: 'late (tarde)' },
    { palabra: 'strong (fuerte)', antonimo: 'weak (débil)' },
    { palabra: 'hard (duro)', antonimo: 'soft (blando)' },
    { palabra: 'full (lleno)', antonimo: 'empty (vacío)' },
    { palabra: 'new (nuevo)', antonimo: 'old (viejo)' },
    { palabra: 'right (correcto)', antonimo: 'wrong (incorrecto)' },
    { palabra: 'day (día)', antonimo: 'night (noche)' },
    { palabra: 'beautiful (hermoso)', antonimo: 'ugly (feo)' },
    { palabra: 'rich (rico)', antonimo: 'poor (pobre)' },
    { palabra: 'easy (fácil)', antonimo: 'difficult (difícil)' },
    { palabra: 'true (verdadero)', antonimo: 'false (falso)' }
  ];


}
