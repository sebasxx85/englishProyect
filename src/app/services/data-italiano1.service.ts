import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataItaliano1Service {

  private principianteA0: string[] = [
    'mela', 'banana', 'ciliegia', 'dattero', 'elefante', 'pesce', 'uva', 'casa', 'isola', 'giacca',
    'canguro', 'limone', 'scimmia', 'quaderno', 'arancia', 'matita', 'regina', 'coniglio', 'sole', 'tigre',
    'blu', 'rosso', 'verde', 're'
  ];

  private basicoA1: string[] = [
    'gatto', 'cane', 'libro', 'auto', 'albero', 'acqua', 'tavolo', 'finestra', 'porta', 'sedia',
    'scuola', 'palla', 'fiore', 'strada', 'orologio', 'tazza', 'camicia', 'scarpa', 'letto', 'lampada',
    'vino', 'dormire', 'sogno', 'anche', 'gomma'
  ];

  private basicoAltoA2: string[] = [
    'tovagliolo', 'assolutamente no', 'rimpianto', 'inquinamento', 'abbastanza a lungo', 'capanna', 'devo', 'minaccia', 'dovere', 'oggigiorno',
    'tendenza', 'filmato', 'fronte', 'shopping-dipendente', 'piegare', 'ingannare', 'fortunatamente', 'deludente', 'lavorare a maglia', 'casa',
    'regina', 'coniglio', 'vassoio', 'divano', 'aragosta', 'una volta', 'entrambi', 'polpette', 'troppo', 'via',
    'città natale', 'svanire', 'portachiavi', 'microonde', 'cucire', 'disgustoso', 'seta', 'comunque', 'amaro', 'farina',
    'suggerire', 'improvviso', 'ritmo', 'scoraggiato', 'tuttavia', 'impermeabile', 'orribile', 'appetito', 'nonostante', 'capolavoro',
    'assicurare', 'follia', 'supportare', 'desiderio', 'garantire', 'regista', 'dolorante', 'duchessa', 'certo', 'dichiarazione', 'degno', 'spaventoso',
    'acquario', 'corona', 'sordo', 'calore', 'frutti di mare', 'credulone', 'guardia del corpo', 'luogo', 'indizio', 'sospettare', 'avido', 'fallimento'
  ];

  private intermedioB1: string[] = [
    'cravatta', 'rimandare', 'per lo più', 'impegnativo', 'arrabbiato', 'in anticipo', 'affidabile', 'egoista', 'paraurti', 'probabile', 
    'nel frattempo', 'parzialmente', 'finché', 'incoraggiante', 'imboscata', 'latticini', 'lieto', 'granchio', 'citare in giudizio', 'isola', 
    'giacca', 'regina', 'coniglio', 'matita', 'limone', 'cartone', 'suppostamente', 'affilato', 'tra', 'amico', 
    'ombroso', 'qualificarsi', 'lampadario', 'peccato', 'mazzo di fiori', 'sposa', 'tovaglia', 'disastro', 'crepe', 'seminterrato',
    'capire', 'pure', 'spesso', 'avanzi', 'masticare', 'liberazione', 'sbagliare', 'discorso', 'cetriolo', 'pettegolezzo',
    'bestiame', 'campagna', 'caviglia', 'posate', 'granelli', 'esitare', 'premuroso', 'sollievo', 'ceramica',
    
    'principale', 'fuoristrada', 'però', 'bancarella', 'correttamente', 'superare', 'utile', 'indovinare',
    'senso', 'intrappolato', 'senza speranza', 'fulmine', 'buon pomeriggio', 'buongiorno', 'buonasera', 'discutere',
    'incrocio', 'saltare', 'balzo', 'qualsiasi cosa', 'stai zitto', 'taci', 'ne vale la pena', 'farsa', 'traccia', 'vendita', 'trucco',
    'farmacia', 'versamenti', 'condimento', 'innocuo', 'articoli da toeletta', 'spazzolato', 'barba', 'filo interdentale', 'pattinare', 'sci',
    'giuria', 'educato', 'decollare', 'aglio', 'meno', 'arrosto', 'libbre', 'fetta', 'litri', 'ladro', 'colpa',
    'tendere la mano', 'accogliente', 'comodo', 'palo', 'stufe', 'freddo', 'caminetto', 'rovinare', 'arco', 'morto', 'cavi',
    'elegante', 'campanello', 'catena di montaggio', 'raggiungere', 'graffio', 'vasca da bagno', 'violazione', 'vetrina', 'fornello', 'fare un passo avanti',
    'ricevuta', 'furto', 'carote', 'rottura', 'ricetta', 'affrettarsi', 'conoscenza', 'chiamata', 'ritratto',
    'scettico', 'oltre', 'difetti', 'coda', 'impresa', 'modelli', 'ostaggio', 'posta in gioco', 'tenere', 'complessivamente', 'panificio'
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

/* getWordsintermedioAlto(): string[] {
  return this.intermedioAltoB2;
}
 */


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
  'sugerir','repentino', 'ritmo', 'desanimado', 'sin embargo', 'impermeable', 'espantoso', 'apetito', 'a pesar de', 'obra maestra',
  'asegurar', 'locura', 'apoyo', 'deseo', 'asegurar','cineasta', 'adolorido', 'duquesa', 'cierto/certero', 'declaración', 'valioso/digno',
  'escalofriante', 'pecera', 'corona', 'sordo', 'calidez', 'mariscos', 'crédulo', 'guardaespaldas', 'lugar/sitio', 'pista', 'sospechoso',
  'codicioso', 'fallo/fracaso'

];

private intermedioB1Res: string[] = [
  'corbata', 'posponer', 'mayormente', 'desafiante', 'molesto', 'con anticipación', 'confiable', 'egoísta', 'parachoque','probable', 
  'mientras tanto', 'parcialmente', 'siempre que', 'alentador', 'emboscada', 'lácteos', 'contento', 'cangrejo', 'demandar', 'isla', 
  'chaqueta', 'reina', 'conejo', 'lápiz', 'limón', 'cartón', 'supuestamente', 'afilado', 'entre', 'amigo', 
  'sombra', 'calificar', 'candelabro', 'pecado', 'ramo', 'novia', 'mantel', 'desastre', 'grietas', 'sótano',
  'descubrir/ averiguar', 'también', 'a menudo', 'sobras', 'masticar', 'liberación', 'arruinar/ estropear','dar discurso', 'pepino', 'chisme',
  'ganado', 'campo', 'tobillo', 'cubiertos', 'chispitas', 'dudar', 'considerado', 'alivio', 'cerámica',

  'principal', 'fuera de camino', 'aunque', 'parar', 'propiamente', 'superar', 'útil', 'adivinar', 'sentido', 'atrapado', 'sin esperanza',
  'relámpago', 'buenas tardes', 'buenos días', 'buenas noches', 'conversar/discutir', 'cruce/encrucijada', 'saltar', 'saltar', 'cualquiera',
  'cállate', 'cállate', 'vale la pena', 'engaño/impostor', 'camino/pista', 'oferta/descuento', 'maquillaje', 'farmacia',
  'derramar', 'ponerse elegante', 'inofensivo', 'artículos de aseo', 'cepillado', 'barba', 'hilo dental', 'patinar', 'esquiando', 'jurado',
  'cortés', 'quitarse/despegar', 'ajo', 'menos', 'asando', 'libras', 'rebanada', 'litros', 'ladrón', 'culpa', 'alcanzar', 'acogedor', 'cómodo',
  'poste/polo', 'calefactor', 'frío', 'chimenea', 'ruina', 'arco', 'falleció', 'alambrado', 'elegante', 'timbre', 'línea de ensamblaje', 'lograr',
  'rascar', 'bañera', 'brecha', 'vitrina', 'estufa', 'un paso adelante', 'recibo', 'robando', 'zanahorias', 'ruptura/separación',
  'receta', 'apurarse', 'conocimiento', 'llamada/decisión', 'retrato', 'escéptico', 'además', 'defectos','cola', 'empresa/aventura', 'patrones',
  'rehén', 'apuesta/riesgo', 'sostener', 'en general', 'panadería'
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

/* getWordsIntermedioAltoRes(): string[] {
  return this.intermedioAltoB2Res;
}
 */

  
}
