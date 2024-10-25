import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLevel1Service {

  // // Arreglo de palabras en inglés
  // private words: string[] = [
  //   'apple', 'banana', 'cherry', 'date', 'elephant', 'fish', 'grape', 
  //   'house', 'island', 'jacket', 'kangaroo', 'lemon', 'monkey', 'notebook', 
  //   'orange', 'pencil', 'queen', 'rabbit', 'sun', 'tiger'
  // ];

  //NIVELES
  private principianteA0: string[] = [
    'apple', 'banana', 'cherry', 'date', 'elephant', 'fish', 'grape', 
    'house', 'island', 'jacket', 'kangaroo', 'lemon', 'monkey', 'notebook', 
    'orange', 'pencil', 'queen', 'rabbit', 'sun', 'tiger'
  ];

  private basicoA1: string[] = [
    'apple', 'banana', 'cherry', 'date', 'elephant', 'fish', 'grape', 
    'house', 'island', 'jacket', 'kangaroo', 'lemon', 'monkey', 'notebook', 
    'orange', 'pencil', 'queen', 'rabbit', 'sun', 'tiger'
  ];

  private basicoAltoA2: string[] = [
    'napkin', 'no way', 'regretted', 'pollution', 'quite a while', 'shack', 'gotta',
    'have to', 'nowadays', 'trend', 'footage', 'forehead', 'shopaholic', 'fold',
    'luckily', 'disappointing', 'knit', 'house', 'queen', 'rabbit'
  ];

  private intermedioB1: string[] = [
    'tie', 'postponing', 'mostly', 'challenging', 'upset', 'ahead of time', 'reliable',
    'likely', 'meanwhile', 'partly', 'as long as', 'encouraging',
    'house', 'island', 'jacket', 'queen', 'rabbit', 'pencil', 'lemon'
  ];

  private intermedioAltoB2: string[] = [
    'confidence', 'bridge', 'casualties', 'lead', 'along', 'prepped', 'wounded', 
    'useless', 'yawn', 'muddy', 'mowing', 'pond', 'lawn', 'thumb', 
    'unpredictable', 'disappeared', 'house', 'island', 'queen', 'rabbit'
  ];


  getWordsPrincipiantes(): string[] {
    return this.principianteA0;
  }

  getWordsBasico(): string[] {
    return this.basicoA1;
  }

  getWordsintermedioAlto(): string[] {
    return this.basicoAltoA2;
  }

  getWordsintermedio(): string[] {
    return this.intermedioB1;
  }

  getWordsBasicoAlto(): string[] {
    return this.intermedioAltoB2;
  }


  
}
