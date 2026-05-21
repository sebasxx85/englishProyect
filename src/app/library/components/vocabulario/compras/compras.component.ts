import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { AdsenseInArticleComponent } from '../../adsense-in-article/adsense-in-article.component';
import { AdsenseFooterComponent } from '../../adsense-footer/adsense-footer.component';

interface Entrada {
  termino: string;
  traduccion: string;
  ejemplo: string;
}

@Component({
    selector: 'app-compras',
    imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule,
        MatDividerModule, AdsenseInArticleComponent, AdsenseFooterComponent],
    templateUrl: './compras.component.html',
    styleUrls: ['./compras.component.scss']
})
export class ComprasComponent {
  title = 'Vocabulario de compras en inglés';

  vocabulario: Entrada[] = [
    { termino: 'Price', traduccion: 'Precio', ejemplo: 'What is the price of this jacket?' },
    { termino: 'Discount', traduccion: 'Descuento', ejemplo: 'Is there any discount today?' },
    { termino: 'Sale', traduccion: 'Oferta / rebaja', ejemplo: 'These shoes are on sale this weekend.' },
    { termino: 'Expensive', traduccion: 'Caro', ejemplo: 'It’s too expensive for me.' },
    { termino: 'Cheap', traduccion: 'Barato', ejemplo: 'This T-shirt is really cheap.' },
    { termino: 'Size', traduccion: 'Talla', ejemplo: 'Do you have this in size M?' },
    { termino: 'Fit', traduccion: 'Quedar / calzar', ejemplo: 'It fits well, thanks.' },
    { termino: 'To try on', traduccion: 'Probarse', ejemplo: 'Can I try it on?' },
    { termino: 'Fitting room', traduccion: 'Probador / vestidor', ejemplo: 'The fitting rooms are over there.' },
    { termino: 'Receipt', traduccion: 'Boleta / recibo', ejemplo: 'Could I get a receipt, please?' },
    { termino: 'Warranty', traduccion: 'Garantía', ejemplo: 'Does this come with a warranty?' },
    { termino: 'Return', traduccion: 'Devolución', ejemplo: 'What is your return policy?' },
    { termino: 'Exchange', traduccion: 'Cambio', ejemplo: 'I’d like to exchange this, please.' },
    { termino: 'Cash', traduccion: 'Efectivo', ejemplo: 'I will pay in cash.' },
    { termino: 'Credit card', traduccion: 'Tarjeta de crédito', ejemplo: 'Can I pay by credit card?' },
    { termino: 'Debit card', traduccion: 'Tarjeta de débito', ejemplo: 'He paid with a debit card.' },
    { termino: 'Contactless', traduccion: 'Pago sin contacto', ejemplo: 'You can tap for contactless payment.' },
    { termino: 'Checkout / Counter', traduccion: 'Caja / mostrador', ejemplo: 'Please pay at the checkout.' },
    { termino: 'Queue / Line', traduccion: 'Fila / cola', ejemplo: 'There’s a long line at the counter.' },
    { termino: 'Bag', traduccion: 'Bolsa', ejemplo: 'Do you need a bag?' },
    { termino: 'Aisle', traduccion: 'Pasillo', ejemplo: 'Bread is in aisle five.' },
    { termino: 'Shelf', traduccion: 'Estante', ejemplo: 'It’s on the top shelf.' },
    { termino: 'In stock', traduccion: 'En stock', ejemplo: 'Yes, we have it in stock.' },
    { termino: 'Out of stock', traduccion: 'Agotado', ejemplo: 'Sorry, it’s out of stock.' },
    { termino: 'Unit price', traduccion: 'Precio por unidad', ejemplo: 'Check the unit price on the label.' },
    { termino: 'Two for one', traduccion: 'Dos por uno', ejemplo: 'There’s a two-for-one offer on coffee.' },
    { termino: 'Gift card', traduccion: 'Tarjeta de regalo', ejemplo: 'I want to use a gift card.' },
    { termino: 'Gift receipt', traduccion: 'Boleta para regalo', ejemplo: 'Do you need a gift receipt?' },
    { termino: 'Store hours', traduccion: 'Horario de la tienda', ejemplo: 'What time do you close?' },
    { termino: 'Dairy section', traduccion: 'Lácteos', ejemplo: 'Milk is in the dairy section.' },
    { termino: 'Bakery', traduccion: 'Panadería', ejemplo: 'The bakery is next to the deli.' },
    { termino: 'Deli', traduccion: 'Cecinas / fiambres', ejemplo: 'Ask at the deli counter.' },
    { termino: 'Butcher', traduccion: 'Carnicería', ejemplo: 'The butcher is at the back.' },
    { termino: 'Fresh produce', traduccion: 'Frutas y verduras', ejemplo: 'Fresh produce is over there.' },
    { termino: 'Self-checkout', traduccion: 'Caja autoservicio', ejemplo: 'You can use the self-checkout machines.' },
    { termino: 'Loyalty card', traduccion: 'Tarjeta de puntos', ejemplo: 'Do you have a loyalty card?' }
  ];

  esenciales = this.vocabulario.slice(0, 12);

  mostrarSoluciones = false;

  practica = [
    { frase: '“Can I ____ it on?” (probarse)', solucion: 'try' },
    { frase: '“Where are the ____ rooms?” (probadores)', solucion: 'fitting' },
    { frase: '“Do you have this in ____ L?” (talla)', solucion: 'size' },
    { frase: '“I will pay in ____.” (efectivo)', solucion: 'cash' },
    { frase: '“Is there any ____ today?” (descuento)', solucion: 'discount' },
    { frase: '“Could I get a ____ please?” (boleta)', solucion: 'receipt' },
    { frase: '“This is too ____ for me.” (caro)', solucion: 'expensive' },
    { frase: '“Coffee is on ____ five.” (pasillo)', solucion: 'aisle' },
    { frase: '“This product is out of ____.” (stock)', solucion: 'stock' },
    { frase: '“You can tap for ____ payment.” (sin contacto)', solucion: 'contactless' },
    { frase: '“There’s a two-for-one ____.” (oferta)', solucion: 'offer' },
    { frase: '“Please pay at the ____.” (caja)', solucion: 'checkout' },
    { frase: '“Do you need a ____?” (bolsa)', solucion: 'bag' },
    { frase: '“Does it come with a ____?” (garantía)', solucion: 'warranty' },
    { frase: '“I’d like to ____ this.” (cambiar)', solucion: 'exchange' }
  ];
}
