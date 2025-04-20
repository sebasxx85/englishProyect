import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ropa',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.scss']
})
export class RopaComponent {
  columnas: string[] = ['prenda', 'traduccion', 'ejemplo'];

  prendas = [
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
}
