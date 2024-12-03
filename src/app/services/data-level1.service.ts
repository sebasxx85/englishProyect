import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLevel1Service {

  //Preguntas
  private principianteA0: string[] = [
    'apple', 'banana', 'cherry', 'date', 'elephant', 'fish', 'grape', 'house', 'island', 'jacket', 
    'kangaroo', 'lemon', 'monkey', 'notebook', 'orange', 'pencil', 'queen', 'rabbit', 'sun', 'tiger',
    'blue', 'red', 'green', 'king'
  ];

  private basicoA1: string[] = [
    'cat', 'dog', 'book', 'car', 'tree', 'water', 'table', 'window', 'door', 'chair', 
    'school', 'ball', 'flower', 'street', 'clock', 'cup', 'shirt', 'shoe', 'bed', 'lamp',
    'wine', 'sleep', 'dream', 'also', 'goma'
  ];

  private basicoAltoA2: string[] = [
    'napkin', 'no way', 'regretted', 'pollution', 'quite a while', 'shack', 'gotta', 'threat', 'have to', 'nowadays', 
    'trend', 'footage', 'forehead', 'shopaholic', 'fold', 'deceive','luckily', 'disappointing', 'knit', 'house', 
    'queen', 'rabbit', 'tray', 'couch', 'lobster', 'once', 'both', 'meatballs', 'too', 'away', 
    'hometown', 'vanish', 'keychain', 'microwave', 'sew', 'gross', 'silk', 'anyway','bitter','flour',
    'suggest','sudden'
  ];

  private intermedioB1: string[] = [
    'tie', 'postponing', 'mostly', 'challenging', 'upset', 'ahead of time', 'reliable', 'selfish', 'bumper', 'likely', 
    'meanwhile', 'partly', 'as long as', 'encouraging', 'ambush', 'dairy', 'glad', 'crab', 'sue', 'island', 
    'jacket', 'queen', 'rabbit', 'pencil', 'lemon', 'cardboard', 'supposedly', 'sharp', 'among', 'buddy', 
    'shady', 'qualify', 'chandelier', 'sin', 'bouquet', 'bride', 'tablecloth', 'disaster', 'cracks', 'basement',
    'figure out', 'as well', 'often', 'leftovers', 'chew', 'deliverance', 'screw up','speech', 'cucumber', 'gossip',
    'cattle', 'countryside','ankle', 'silverware'
  ];

  private intermedioAltoB2: string[] = [
    'confidence', 'bridge', 'casualties', 'lead', 'along', 'prepped', 'wounded', 'guilty', 'remains','suspicion',
    'useless', 'yawn', 'muddy', 'mowing', 'pond', 'lawn', 'thumb', 'starve', 'futhermore', 'mustache',
    'unpredictable', 'disappeared', 'island', 'queen', 'rabbit', 'landscape', 'frost', 'rainbow', 'split', 'chill out',
    'ahead', 'grabby', 'stubborn','fate', 'beyond', 'delightful', 'come along', 'doubtful', 'neither', 'brief', 
    'concern', 'widespread','renaissance', 'briefly', 'aware', 'wage', 'clap', 'farthest','seatbelt', 'clean up',
    'wrapper','yummy','passed away'
  ];

 //Metodos Preguntas

  getWordsPrincipiantes(): string[] {
    return this.principianteA0;
  }

  getWordsBasico(): string[] {
    return this.basicoA1;
  }

  getWordsBasicoAlto(): string[] {
    return this.basicoAltoA2;
  }

  getWordsintermedio(): string[] {
    return this.intermedioB1;
  }

  getWordsintermedioAlto(): string[] {
    return this.intermedioAltoB2;
  }

 
//Repuestas
private principianteA0Res: string[] = [
  'manzana', 'banana', 'cereza', 'fecha', 'elefante', 'pez', 'uva', 'casa', 'isla', 'chaqueta', 
  'canguro', 'limón', 'mono', 'cuaderno','naranja', 'lápiz', 'reina', 'conejo', 'sol', 'tigre',
  'azul', 'rojo', 'verde','rey'
];

private basicoA1Res: string[] = [
  'gato', 'perro', 'libro', 'coche', 'árbol', 'agua', 'mesa','ventana', 'puerta', 'silla', 
  'escuela', 'pelota', 'flor', 'calle','reloj', 'taza', 'camisa', 'zapato', 'cama', 'lámpara',
  'vino','dormir', 'sueño', 'tambien', 'chicle/ goma'
];

private basicoAltoA2Res: string[] = [
  'servilleta', 'de ninguna manera', 'lamentó', 'contaminación', 'bastante tiempo', 'choza', 'tengo que', 'amenaza','tener que', 'hoy en día', 
  'tendencia', 'metraje', 'frente', 'comprador compulsivo', 'doblar', 'engañar','afortunadamente', 'decepcionante', 'tejer', 'casa', 
  'reina', 'conejo', 'bandeja', 'sofá', 'langosta', 'una vez', 'ambos', 'albóndigas', 'también', 'lejos', 
  'ciudad natal', 'desaparecer', 'llavero', 'microondas', 'coser', 'asqueroso/ bruto', 'seda', 'de todos modos', 'amargo','harina',
  'sugerir','repentino'
];


private intermedioB1Res: string[] = [
  'corbata', 'posponer', 'mayormente', 'desafiante', 'molesto', 'con anticipación', 'confiable', 'egoísta', 'parachoque','probable', 
  'mientras tanto', 'parcialmente', 'siempre que', 'alentador', 'emboscada', 'lácteos', 'contento', 'cangrejo', 'demandar', 'isla', 
  'chaqueta', 'reina', 'conejo', 'lápiz', 'limón', 'cartón', 'supuestamente', 'afilado', 'entre', 'amigo', 
  'sombra', 'calificar', 'candelabro', 'pecado', 'ramo', 'novia', 'mantel', 'desastre', 'grietas', 'sótano',
  'descubrir/ averiguar', 'también', 'a menudo', 'sobras', 'masticar', 'liberación', 'arruinar/ estropear','dar discurso', 'pepino', 'chisme',
  'ganado', 'campo', 'tobillo','cubiertos'
];


private intermedioAltoB2Res: string[] = [
  'confianza', 'puente', 'víctimas', 'liderar', 'a lo largo de', 'preparado', 'herido', 'culpable', 'restos', 'sospecha',
  'inútil', 'bostezar', 'fangoso', 'cortar el césped', 'estanque', 'césped', 'pulgar', 'morir de hambre', 'además', 'bigote',
  'impredecible', 'desaparecido', 'isla', 'reina', 'conejo', 'paisaje', 'escarcha', 'arcoiris', 'dividir', 'relajarse',
  'adelante','agarrador', 'obstinado', 'destino', 'más allá de', 'encantador', 'acompañar', 'dudoso', 'ninguno/ ni','breve', 
  'preocupación', 'generalizado', 'renacimiento', 'brevemente','conciente', 'salario', 'aplaudir','más lejano', 'cinturon de seguridad', 'limpiar',
  'envoltorio','delicioso', 'fallecer'
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

// DEBO CREAR EL ARREGLO CON EL EJEMPLO PARA CADA PALABRA EN EL MISMO ORDEN EN EL ARREGLO

  
}
