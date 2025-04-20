import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-colores',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.scss']
})
export class ColoresComponent {
  columnas: string[] = ['color', 'traduccion', 'ejemplo'];

  colores = [
    { color: 'Red', traduccion: 'Rojo', ejemplo: 'The apple is red.' },
    { color: 'Blue', traduccion: 'Azul', ejemplo: 'The sky is blue.' },
    { color: 'Yellow', traduccion: 'Amarillo', ejemplo: 'The sun is yellow.' },
    { color: 'Green', traduccion: 'Verde', ejemplo: 'The grass is green.' },
    { color: 'Black', traduccion: 'Negro', ejemplo: 'The cat is black.' },
    { color: 'White', traduccion: 'Blanco', ejemplo: 'The snow is white.' },
    { color: 'Orange', traduccion: 'Naranjo', ejemplo: 'The orange is orange.' },
    { color: 'Purple', traduccion: 'Morado', ejemplo: 'The flower is purple.' },
    { color: 'Pink', traduccion: 'Rosado', ejemplo: 'Her dress is pink.' },
    { color: 'Brown', traduccion: 'Café / Marrón', ejemplo: 'The bear is brown.' },
    { color: 'Gray', traduccion: 'Gris', ejemplo: 'The elephant is gray.' },
    { color: 'Light blue', traduccion: 'Celeste', ejemplo: 'Her shirt is light blue.' },
    { color: 'Dark green', traduccion: 'Verde oscuro', ejemplo: 'The tree is dark green.' },
    { color: 'Beige', traduccion: 'Beige', ejemplo: 'The wall is beige.' },
    { color: 'Gold', traduccion: 'Dorado', ejemplo: 'The ring is gold.' },
    { color: 'Silver', traduccion: 'Plateado', ejemplo: 'The car is silver.' },
    { color: 'Turquoise', traduccion: 'Turquesa', ejemplo: 'The water is turquoise.' },
    { color: 'Violet', traduccion: 'Violeta', ejemplo: 'She has a violet notebook.' },
    { color: 'Magenta', traduccion: 'Magenta', ejemplo: 'He wears a magenta shirt.' },
    { color: 'Navy blue', traduccion: 'Azul marino', ejemplo: 'The jacket is navy blue.' }
  ];
}
