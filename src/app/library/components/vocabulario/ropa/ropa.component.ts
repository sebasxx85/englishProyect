import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

interface Prenda {
  prenda: string;
  traduccion: string;
  ejemplo: string;
}

@Component({
  selector: 'app-ropa',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule, MatDividerModule],
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.scss']
})
export class RopaComponent {
  title = 'Vocabulario de Ropa en inglés';

  prendas: Prenda[] = [
    { prenda: 'Shirt', traduccion: 'Camisa', ejemplo: 'He is wearing a blue shirt.' },
    { prenda: 'T-shirt', traduccion: 'Polera / Camiseta', ejemplo: 'I like wearing a white T-shirt.' },
    { prenda: 'Pants', traduccion: 'Pantalones', ejemplo: 'She bought new pants.' },
    { prenda: 'Jeans', traduccion: 'Jeans / Vaqueros', ejemplo: 'He always wears jeans.' },
    { prenda: 'Shorts', traduccion: 'Pantalones cortos', ejemplo: 'I wear shorts in summer.' },
    { prenda: 'Skirt', traduccion: 'Falda', ejemplo: 'She is wearing a red skirt.' },
    { prenda: 'Dress', traduccion: 'Vestido', ejemplo: 'That dress looks beautiful on you.' },
    { prenda: 'Jacket', traduccion: 'Chaqueta', ejemplo: 'He put on his jacket before going out.' },
    { prenda: 'Coat', traduccion: 'Abrigo', ejemplo: 'It’s cold, wear a coat.' },
    { prenda: 'Sweater', traduccion: 'Suéter', ejemplo: 'This sweater is very soft.' },
    { prenda: 'Hoodie', traduccion: 'Polerón con capucha', ejemplo: 'I love my black hoodie.' },
    { prenda: 'Shoes', traduccion: 'Zapatos', ejemplo: 'My shoes are dirty.' },
    { prenda: 'Sneakers', traduccion: 'Zapatillas deportivas', ejemplo: 'He wears sneakers every day.' },
    { prenda: 'Boots', traduccion: 'Botas', ejemplo: 'She wears boots in the rain.' },
    { prenda: 'Socks', traduccion: 'Calcetines', ejemplo: 'I need clean socks.' },
    { prenda: 'Hat', traduccion: 'Sombrero / Gorro', ejemplo: 'He is wearing a big hat.' },
    { prenda: 'Cap', traduccion: 'Gorra', ejemplo: 'He has a red cap on.' },
    { prenda: 'Scarf', traduccion: 'Bufanda', ejemplo: 'She is wearing a wool scarf.' },
    { prenda: 'Gloves', traduccion: 'Guantes', ejemplo: 'I wear gloves in winter.' },
    { prenda: 'Underwear', traduccion: 'Ropa interior', ejemplo: 'Always wear clean underwear.' }
  ];

  esenciales = this.prendas.slice(0, 10);

  mostrarSoluciones = false;

  /** 15 ejercicios.
   *  - Ítems 1-10: completar con la PRENDA en inglés.
   *  - Ítems 11-15: completar con el VERBO correcto (wear / put on / took off / will wear / is going to put on, etc.).
   *  Respuestas en minúsculas para consistencia.
   */
  practica = [
    { frase: 'He is wearing a blue ____. (camisa)', solucion: 'shirt' },
    { frase: 'I like this white ____. (polera/camiseta)', solucion: 't-shirt' },
    { frase: 'She bought new ____. (pantalones)', solucion: 'pants' },
    { frase: 'He always wears ____. (jeans/vaqueros)', solucion: 'jeans' },
    { frase: 'I wear ____ in summer. (pantalones cortos)', solucion: 'shorts' },
    { frase: 'She is wearing a red ____. (falda)', solucion: 'skirt' },
    { frase: 'That ____ looks beautiful on you. (vestido)', solucion: 'dress' },
    { frase: 'He put on his ____. (chaqueta)', solucion: 'jacket' },
    { frase: 'It’s cold, wear a ____. (abrigo)', solucion: 'coat' },
    { frase: 'My ____ are dirty. (zapatos)', solucion: 'shoes' },

    // Verbos con ropa (tiempos)
    { frase: 'Yesterday he ____ his jacket because it was hot. (se la sacó)', solucion: 'took off' },
    { frase: 'Right now she ____ a scarf. (se está poniendo)', solucion: 'is putting on' },
    { frase: 'Tomorrow I ____ my new sneakers. (las usaré)', solucion: 'will wear' },
    { frase: 'On rainy days they usually ____ boots. (usan)', solucion: 'wear' },
    { frase: 'She ____ a hoodie before going out. (se va a poner)', solucion: 'is going to put on' }
  ];
}
