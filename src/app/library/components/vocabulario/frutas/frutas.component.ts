import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AdsenseInArticleComponent } from '../../adsense-in-article/adsense-in-article.component';
import { AdsenseFooterComponent } from '../../adsense-footer/adsense-footer.component';

interface EntradaFruta {
  fruta: string;
  traduccion: string;
  ejemplo: string;
}

@Component({
    selector: 'app-frutas',
    imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule,
        MatDividerModule, AdsenseInArticleComponent, AdsenseFooterComponent],
    templateUrl: './frutas.component.html',
    styleUrls: ['./frutas.component.scss']
})
export class FrutasComponent {
  title = 'Frutas en inglés';

  frutas: EntradaFruta[] = [
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
    { fruta: 'Blueberry', traduccion: 'Arándano', ejemplo: 'Blueberries are great for pancakes.' },
    { fruta: 'Papaya', traduccion: 'Papaya', ejemplo: 'Papaya is good for digestion.' },
    { fruta: 'Coconut', traduccion: 'Coco', ejemplo: 'The coconut has a hard shell and white flesh.' },
    { fruta: 'Plum', traduccion: 'Ciruela', ejemplo: 'She ate a fresh plum.' },
    { fruta: 'Melon', traduccion: 'Melón', ejemplo: 'Melon is sweet and juicy.' },
    { fruta: 'Fig', traduccion: 'Higo', ejemplo: 'Figs are often eaten dried.' },
    { fruta: 'Avocado', traduccion: 'Palta / Aguacate', ejemplo: 'Avocados are rich in healthy fats.' }
  ];

  esenciales = this.frutas.slice(0, 10);

  mostrarSoluciones = false;

  // 15 ejercicios: complete con la palabra en INGLÉS (a/an/some cuando aplique)
  practica = [
    { frase: 'She bought __ apple and __ banana.', solucion: 'an, a' },
    { frase: 'He drinks ____ juice every morning. (naranja)', solucion: 'orange' },
    { frase: 'We ate ____ at the picnic. (sandía)', solucion: 'watermelon' },
    { frase: '____ are small and red. (cerezas)', solucion: 'cherries' },
    { frase: 'I like ____ smoothies. (plátano)', solucion: 'banana' },
    { frase: 'They served ____ after lunch. (uvas)', solucion: 'grapes' },
    { frase: 'This cake has ____ on top. (arándanos)', solucion: 'blueberries' },
    { frase: 'She prefers ____ because it is softer than an apple. (pera)', solucion: 'a pear' },
    { frase: 'He cut ____ and added lemon. (palta/aguacate)', solucion: 'an avocado' },
    { frase: 'We tried ____ from Mexico. (mango)', solucion: 'mango' },
    { frase: 'The dessert includes dried ____. (higos)', solucion: 'figs' },
    { frase: 'Please add ____ to the yogurt. (frutillas/fresas, plural)', solucion: 'strawberries' },
    { frase: 'He bought ____ and a lemon. (durazno)', solucion: 'a peach' },
    { frase: 'They cracked ____ to drink the water. (coco)', solucion: 'a coconut' },
    { frase: 'This salad has ____ and grapes. (piña)', solucion: 'pineapple' }
  ];
}
