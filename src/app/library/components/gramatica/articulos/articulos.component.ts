
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-articulos',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent {
  columnas: string[] = ['articulo', 'tipo', 'uso', 'ejemplo'];

  articulos = [
    {
      articulo: 'a',
      tipo: 'Indefinido',
      uso: 'Antes de una palabra singular que comienza con consonante',
      ejemplo: 'I saw a dog in the park.'
    },
    {
      articulo: 'an',
      tipo: 'Indefinido',
      uso: 'Antes de una palabra singular que comienza con vocal',
      ejemplo: 'She ate an apple this morning.'
    },
    {
      articulo: 'the',
      tipo: 'Definido',
      uso: 'Cuando se habla de algo específico o ya conocido',
      ejemplo: 'The book is on the table.'
    }
  ];
}

