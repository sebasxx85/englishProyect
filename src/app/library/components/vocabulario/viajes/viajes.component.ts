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
    selector: 'app-viajes',
    imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule,
        MatDividerModule, AdsenseInArticleComponent, AdsenseFooterComponent],
    templateUrl: './viajes.component.html',
    styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent {
  title = 'Vocabulario de viajes en inglés';

  vocabulario: Entrada[] = [
    { termino: 'Flight', traduccion: 'Vuelo', ejemplo: 'Our flight leaves at 9 a.m.' },
    { termino: 'Boarding pass', traduccion: 'Tarjeta de embarque', ejemplo: 'Please show your boarding pass.' },
    { termino: 'Gate', traduccion: 'Puerta de embarque', ejemplo: 'The gate changed to B12.' },
    { termino: 'Check-in', traduccion: 'Registro (aeropuerto/hotel)', ejemplo: 'We need to check in two bags.' },
    { termino: 'Baggage / Luggage', traduccion: 'Equipaje', ejemplo: 'Keep your luggage with you.' },
    { termino: 'Carry-on', traduccion: 'Equipaje de mano', ejemplo: 'Only one carry-on is allowed.' },
    { termino: 'Bag drop', traduccion: 'Entrega de equipaje', ejemplo: 'Go to bag drop after check-in.' },
    { termino: 'Security', traduccion: 'Seguridad', ejemplo: 'Security is on the second floor.' },
    { termino: 'Customs', traduccion: 'Aduana', ejemplo: 'We passed through customs quickly.' },
    { termino: 'Immigration', traduccion: 'Migración', ejemplo: 'Immigration took 15 minutes.' },
    { termino: 'Boarding time', traduccion: 'Hora de embarque', ejemplo: 'Boarding time is 8:30.' },
    { termino: 'Delay', traduccion: 'Retraso', ejemplo: 'The flight has a two-hour delay.' },
    { termino: 'Cancelled', traduccion: 'Cancelado', ejemplo: 'Our flight was cancelled.' },
    { termino: 'Seat', traduccion: 'Asiento', ejemplo: 'My seat is 21A.' },
    { termino: 'Window seat', traduccion: 'Asiento de ventana', ejemplo: 'I prefer a window seat.' },
    { termino: 'Aisle seat', traduccion: 'Asiento de pasillo', ejemplo: 'He wants an aisle seat.' },
    { termino: 'Hotel reservation', traduccion: 'Reserva de hotel', ejemplo: 'I have a hotel reservation for two nights.' },
    { termino: 'Check-in (hotel)', traduccion: 'Check-in (hotel)', ejemplo: 'Hotel check-in starts at 3 p.m.' },
    { termino: 'Check-out', traduccion: 'Check-out', ejemplo: 'Check-out is at noon.' },
    { termino: 'Key card', traduccion: 'Tarjeta de habitación', ejemplo: 'Your key card opens the elevator.' },
    { termino: 'Breakfast included', traduccion: 'Desayuno incluido', ejemplo: 'Is breakfast included?' },
    { termino: 'Directions', traduccion: 'Indicaciones', ejemplo: 'Could you give me directions?' },
    { termino: 'Turn left / right', traduccion: 'Gire a la izquierda / derecha', ejemplo: 'Turn right at the next corner.' },
    { termino: 'Straight ahead', traduccion: 'Todo recto / derecho', ejemplo: 'Go straight ahead for two blocks.' },
    { termino: 'Corner', traduccion: 'Esquina', ejemplo: 'The café is on the corner.' },
    { termino: 'Crosswalk', traduccion: 'Paso de peatones', ejemplo: 'Use the crosswalk, please.' },
    { termino: 'Bus stop', traduccion: 'Paradero de bus', ejemplo: 'The bus stop is across the street.' },
    { termino: 'Subway / Metro', traduccion: 'Metro', ejemplo: 'Take the subway to the museum.' },
    { termino: 'Train station', traduccion: 'Estación de tren', ejemplo: 'The train station is nearby.' },
    { termino: 'Ticket', traduccion: 'Boleto / billete', ejemplo: 'Two tickets to downtown, please.' },
    { termino: 'One-way / Round trip', traduccion: 'Solo ida / Ida y vuelta', ejemplo: 'I need a round-trip ticket.' },
    { termino: 'Platform', traduccion: 'Andén', ejemplo: 'The train leaves from platform 4.' },
    { termino: 'Timetable / Schedule', traduccion: 'Horario', ejemplo: 'Check the timetable online.' },
    { termino: 'Rent a car', traduccion: 'Arrendar un auto', ejemplo: 'We will rent a car for the weekend.' },
    { termino: 'Gas station', traduccion: 'Gasolinera', ejemplo: 'There is a gas station nearby.' },
    { termino: 'Passport', traduccion: 'Pasaporte', ejemplo: 'Keep your passport with you.' },
    { termino: 'Visa', traduccion: 'Visa', ejemplo: 'Do I need a visa for this country?' },
    { termino: 'Travel insurance', traduccion: 'Seguro de viaje', ejemplo: 'Travel insurance is recommended.' },
    { termino: 'Tourist information', traduccion: 'Información turística', ejemplo: 'Ask at the tourist information desk.' }
  ];

  esenciales = this.vocabulario.slice(0, 12);

  mostrarSoluciones = false;

  practica = [
    { frase: '“Where is the ____ gate?” (puerta de embarque)', solucion: 'boarding' },
    { frase: '“I lost my ____ pass.” (tarjeta de embarque)', solucion: 'boarding' },
    { frase: '“There is a two-hour ____.” (retraso)', solucion: 'delay' },
    { frase: '“Is ____ included?” (desayuno)', solucion: 'breakfast' },
    { frase: '“Go ____ ahead two blocks.” (todo recto)', solucion: 'straight' },
    { frase: '“I prefer an ____ seat.” (pasillo)', solucion: 'aisle' },
    { frase: '“Where is the bus ____?” (paradero)', solucion: 'stop' },
    { frase: '“Please show your ____.” (pasaporte)', solucion: 'passport' },
    { frase: '“We will ____ a car.” (arrendar)', solucion: 'rent' },
    { frase: '“The train leaves from ____ 3.” (andén)', solucion: 'platform' },
    { frase: '“Do I need a ____ for this country?” (visa)', solucion: 'visa' },
    { frase: '“Let’s check the ____ online.” (horario)', solucion: 'timetable' },
    { frase: '“Hotel ____ is at noon.” (check-out)', solucion: 'checkout' },
    { frase: '“Only one ____ is allowed.” (equipaje de mano)', solucion: 'carry-on' },
    { frase: '“Go to ____ after check-in.” (entrega de equipaje)', solucion: 'bag drop' }
  ];
}
