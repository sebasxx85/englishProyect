import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-frutas',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.scss']
})
export class FrutasComponent {
  columnas: string[] = ['fruta', 'traduccion', 'ejemplo'];

  frutas = [
    { fruta: 'Apple', traduccion: 'Manzana', ejemplo: 'She eats an apple every day.' },
    { fruta: 'Banana', traduccion: 'Plátano', ejemplo: 'I like banana smoothies.' },
    { fruta: 'Orange', traduccion: 'Naranja', ejemplo: 'He drinks orange juice in the morning.' },
    { fruta: 'Strawberry', traduccion: 'Fresa / Frutilla', ejemplo: 'Strawberries are sweet and red.' },
    { fruta: 'Grapes', traduccion: 'Uvas', ejemplo: 'The grapes are purple and juicy.' },
    { fruta: 'Pineapple', traduccion: 'Piña', ejemplo: 'Pineapple is a tropical fruit.' },
    { fruta: 'Watermelon', traduccion: 'Sandía', ejemplo: 'We eat watermelon in summer.' },
    { fruta: 'Pear', traduccion: 'Pera', ejemplo: 'A pear is softer than an apple.' },
    { fruta: 'Peach', traduccion: 'Durazno', ejemplo: 'She likes peach yogurt.' },
    { fruta: 'Mango', traduccion: 'Mango', ejemplo: 'Mango is very tasty and sweet.' },
    { fruta: 'Lemon', traduccion: 'Limón', ejemplo: 'Lemon is sour and yellow.' },
    { fruta: 'Cherry', traduccion: 'Cereza', ejemplo: 'Cherries are small and red.' },
    { fruta: 'Kiwi', traduccion: 'Kiwi', ejemplo: 'The kiwi has green flesh inside.' },
    { fruta: 'Blueberry', traduccion: 'Arándano', ejemplo: 'Blueberries are good for pancakes.' },
    { fruta: 'Papaya', traduccion: 'Papaya', ejemplo: 'Papaya is good for digestion.' },
    { fruta: 'Coconut', traduccion: 'Coco', ejemplo: 'The coconut has hard shell and white flesh.' },
    { fruta: 'Plum', traduccion: 'Ciruela', ejemplo: 'She ate a fresh plum.' },
    { fruta: 'Melon', traduccion: 'Melón', ejemplo: 'Melon is sweet and juicy.' },
    { fruta: 'Fig', traduccion: 'Higo', ejemplo: 'Figs are often eaten dried.' },
    { fruta: 'Avocado', traduccion: 'Palta / Aguacate', ejemplo: 'Avocados are rich in healthy fats.' }
  ];
}
