import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLevel1Service {

  //Preguntas
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

 //Metodos Preguntas

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

//Repuestas
private principianteA0Res: string[] = [
  'manzana', 'banana', 'cereza', 'dátil', 'elefante', 'pez', 'uva', 
  'casa', 'isla', 'chaqueta', 'canguro', 'limón', 'mono', 'cuaderno', 
  'naranja', 'lápiz', 'reina', 'conejo', 'sol', 'tigre'
];

private basicoA1Res: string[] = [
  'manzana', 'banana', 'cereza', 'dátil', 'elefante', 'pez', 'uva', 
  'casa', 'isla', 'chaqueta', 'canguro', 'limón', 'mono', 'cuaderno', 
  'naranja', 'lápiz', 'reina', 'conejo', 'sol', 'tigre'
];

private basicoAltoA2Res: string[] = [
  'servilleta', 'de ninguna manera', 'lamentó', 'contaminación', 'bastante tiempo', 'choza', 'tengo que',
  'tener que', 'hoy en día', 'tendencia', 'metraje', 'frente', 'comprador compulsivo', 'doblar',
  'afortunadamente', 'decepcionante', 'tejer', 'casa', 'reina', 'conejo'
];


private intermedioB1Res: string[] = [
  'corbata', 'posponer', 'mayormente', 'desafiante', 'molesto', 'con anticipación', 'confiable',
  'probable', 'mientras tanto', 'parcialmente', 'siempre que', 'alentador',
  'casa', 'isla', 'chaqueta', 'reina', 'conejo', 'lápiz', 'limón'
];


private intermedioAltoB2Res: string[] = [
  'confianza', 'puente', 'víctimas', 'liderar', 'a lo largo de', 'preparado', 'herido', 
  'inútil', 'bostezar', 'fangoso', 'cortar el césped', 'estanque', 'césped', 'pulgar', 
  'impredecible', 'desaparecido', 'casa', 'isla', 'reina', 'conejo'
];


//Metodos Respuestas

getWordsPrincipiantesRes(): string[] {
  return this.principianteA0Res;
}

getWordsBasicoRes(): string[] {
  return this.basicoA1Res;
}

getWordsBasicoAltoRes(): string[] {
  return this.basicoAltoA2Res;
}

getWordsintermedioRes(): string[] {
  return this.intermedioB1Res;
}

getWordsIntermedioAltoRes(): string[] {
  return this.intermedioAltoB2Res;
}



  
}
