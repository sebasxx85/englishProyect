import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AdsenseInArticleComponent } from '../../adsense-in-article/adsense-in-article.component';
import { AdsenseFooterComponent } from '../../adsense-footer/adsense-footer.component';

interface EntradaColor {
  color: string;
  traduccion: string;
  ejemplo: string;
  hex?: string; // muestra visual opcional
}

@Component({
    selector: 'app-colores',
    imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule,
        MatDividerModule, AdsenseInArticleComponent, AdsenseFooterComponent],
    templateUrl: './colores.component.html',
    styleUrls: ['./colores.component.scss']
})
export class ColoresComponent {
  title = 'Colores en inglés';

  colores: EntradaColor[] = [
    { color: 'Red', traduccion: 'Rojo', ejemplo: 'The apple is red.', hex: '#e53935' },
    { color: 'Blue', traduccion: 'Azul', ejemplo: 'The sky is blue.', hex: '#1e88e5' },
    { color: 'Yellow', traduccion: 'Amarillo', ejemplo: 'The sun is yellow.', hex: '#fdd835' },
    { color: 'Green', traduccion: 'Verde', ejemplo: 'The grass is green.', hex: '#43a047' },
    { color: 'Black', traduccion: 'Negro', ejemplo: 'The cat is black.', hex: '#000000' },
    { color: 'White', traduccion: 'Blanco', ejemplo: 'The snow is white.', hex: '#ffffff' },
    { color: 'Orange', traduccion: 'Naranjo', ejemplo: 'The orange is orange.', hex: '#fb8c00' },
    { color: 'Purple', traduccion: 'Morado', ejemplo: 'The flower is purple.', hex: '#8e24aa' },
    { color: 'Pink', traduccion: 'Rosado', ejemplo: 'Her dress is pink.', hex: '#ec407a' },
    { color: 'Brown', traduccion: 'Café / Marrón', ejemplo: 'The bear is brown.', hex: '#8d6e63' },
    { color: 'Gray', traduccion: 'Gris', ejemplo: 'The elephant is gray.', hex: '#9e9e9e' },
    { color: 'Light blue', traduccion: 'Celeste', ejemplo: 'Her shirt is light blue.', hex: '#81d4fa' },
    { color: 'Dark green', traduccion: 'Verde oscuro', ejemplo: 'The tree is dark green.', hex: '#1b5e20' },
    { color: 'Beige', traduccion: 'Beige', ejemplo: 'The wall is beige.', hex: '#f5f5dc' },
    { color: 'Gold', traduccion: 'Dorado', ejemplo: 'The ring is gold.', hex: '#d4af37' },
    { color: 'Silver', traduccion: 'Plateado', ejemplo: 'The car is silver.', hex: '#c0c0c0' },
    { color: 'Turquoise', traduccion: 'Turquesa', ejemplo: 'The water is turquoise.', hex: '#40e0d0' },
    { color: 'Violet', traduccion: 'Violeta', ejemplo: 'She has a violet notebook.', hex: '#7f00ff' },
    { color: 'Magenta', traduccion: 'Magenta', ejemplo: 'He wears a magenta shirt.', hex: '#ff00ff' },
    { color: 'Navy blue', traduccion: 'Azul marino', ejemplo: 'The jacket is navy blue.', hex: '#001f3f' }
  ];

  esenciales = this.colores.slice(0, 10);

  mostrarSoluciones = false;

  // 15 ejercicios (complete con el color en inglés)
  practica = [
    { frase: 'The apple is ____.', solucion: 'red' },
    { frase: 'The sky looks ____ today.', solucion: 'blue' },
    { frase: 'The sun is bright and ____.', solucion: 'yellow' },
    { frase: 'The grass in spring is ____.', solucion: 'green' },
    { frase: 'The cat is completely ____.', solucion: 'black' },
    { frase: 'Snow is usually ____.', solucion: 'white' },
    { frase: 'This juice is made of oranges, it is ____.', solucion: 'orange' },
    { frase: 'That flower is ____.', solucion: 'purple' },
    { frase: 'Her backpack is ____.', solucion: 'pink' },
    { frase: 'The bear’s fur is ____.', solucion: 'brown' },
    { frase: 'Elephants are often ____.', solucion: 'gray' },
    { frase: 'The baby’s hat is ____.', solucion: 'light blue' },
    { frase: 'Pine trees are a ____ color.', solucion: 'dark green' },
    { frase: 'The ring looks ____.', solucion: 'gold' },
    { frase: 'This car is shiny and ____.', solucion: 'silver' },
  ];
}

