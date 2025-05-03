import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataEnglish1Service {

  //Preguntas
  private principianteA0: string[] = [
    'apple', 'banana', 'cherry', 'date', 'elephant', 'fish', 'grape', 'house', 'island', 'jacket', 
    'kangaroo', 'lemon', 'monkey', 'notebook', 'orange', 'pencil', 'queen', 'rabbit', 'sun', 'tiger',
    'blue', 'red', 'green', 'king'
  ];

  private basicoA1: string[] = [
    'cat', 'dog', 'book', 'car', 'tree', 'water', 'table', 'window', 'door', 'chair', 
    'school', 'ball', 'flower', 'street', 'clock', 'cup', 'shirt', 'shoe', 'bed', 'lamp',
    'wine', 'sleep', 'dream', 'also', 'gum'
  ];

  private basicoAltoA2: string[] = [
    'napkin', 'no way', 'regretted', 'pollution', 'quite a while', 'shack', 'gotta', 'threat', 'have to', 'nowadays', 
    'trend', 'footage', 'forehead', 'shopaholic', 'fold', 'deceive','luckily', 'disappointing', 'knit', 'house', 
    'queen', 'rabbit', 'tray', 'couch', 'lobster', 'once', 'both', 'meatballs', 'too', 'away', 
    'hometown', 'vanish', 'keychain', 'microwave', 'sew', 'gross', 'silk', 'anyway','bitter','flour',
    'suggest','sudden', 'rhythm', 'discouraged', 'nevertheless', 'waterproof', 'hideous', 'appetite', 'despite', 'masterpiece',
    'ensure', 'madness', 'support','desire', 'assure', 'filmmaker','sore', 'duchess', 'certain', 'statement', 'worthy', 'spooky',
    'fish tank', 'crown', 'deaf', 'warmth', 'seafood', 'gullible', 'bodyguard', 'venue', 'clue', 'suspect', 'greedy', 'failure',
    'postage stamp', 'fuzzy', 'brick', 'fired', 'clumsy','warn', 'loverly', 'until', 'naive', 'grudges', 'kiddo', 'pushy',
    'voyage', 'dock', 'fish tank', 'mortgage', 'tile'
  ];

  private intermedioB1: string[] = [
    'tie', 'postponing', 'mostly', 'challenging', 'upset', 'ahead of time', 'reliable', 'selfish', 'bumper', 'likely', 
    'meanwhile', 'partly', 'as long as', 'encouraging', 'ambush', 'dairy', 'glad', 'crab', 'sue', 'island', 
    'jacket', 'queen', 'rabbit', 'pencil', 'lemon', 'cardboard', 'supposedly', 'sharp', 'among', 'buddy', 
    'shady', 'qualify', 'chandelier', 'sin', 'bouquet', 'bride', 'tablecloth', 'disaster', 'cracks', 'basement',
    'figure out', 'as well', 'often', 'leftovers', 'chew', 'deliverance', 'screw up','speech', 'cucumber', 'gossip',
    'cattle', 'countryside','ankle', 'silverware', 'sprinkles', 'hesitate', 'thoughtful', 'relief', 'pottery',
    
    'main', 'off-road', 'though', 'stall', 'properly', 'exceed', 'useful', 'guess',
    'sense', 'trapped', 'hopelessly', 'lightning', 'good afternoon', 'good morning', 'good evening', 'discuss',
    'crossroads', 'jump', 'leap', 'whatever', 'be quiet', 'shut up', 'its worth', 'sham', 'track', 'sale', 'makeup',
    'drugstore', 'spills', 'dressing', 'harmless', 'toiletries', 'brushed', 'beard', 'floss', 'skate', 'skiing',
    'jury', 'polite', 'take off', 'garlic', 'fewer', 'roasting', 'pounds', 'slice', 'liters', 'thief', 'blame',
    'reach out', 'cozy', 'comfy', 'pole', 'heaters', 'chilly', 'fireplace', 'ruin', 'arch', 'died', 'wiring',
    'fancy', 'ding', 'assembly line', 'achieve', 'scratch', 'bathtub', 'breach', 'showcase', 'stove', 'step forward',
    'receipt', 'stealing', 'carrots', 'breakup', 'recipe', 'to hurry', 'knowledge', 'call', 'portrait',
    'skeptical', 'besides', 'flaws', 'queue', 'enterprise', 'patterns','hostage', 'stake', 'hold', 'overall', 'bakery'
  ];

  private intermedioAltoB2: string[] = [
    'confidence', 'bridge', 'casualties', 'lead', 'along', 'prepped', 'wounded', 'guilty', 'remains', 'suspicion',
    'useless', 'yawn', 'muddy', 'mowing', 'pond', 'lawn', 'thumb', 'starve', 'furthermore', 'mustache',
    'unpredictable', 'disappeared', 'island', 'queen', 'rabbit', 'landscape', 'frost', 'rainbow', 'split', 'chill out',
    'ahead', 'grabby', 'stubborn', 'fate', 'beyond', 'delightful', 'come along', 'doubtful', 'neither', 'brief',
    'concern', 'widespread', 'renaissance', 'briefly', 'aware', 'wage', 'clap', 'farthest', 'seatbelt', 'clean up',
    'wrapper', 'yummy', 'passed away', 'explain', 'budget', 'never give up', 'giving up', 'either', 'kinda', 'stuff',
    'however', 'nevertheless', 'afford', 'moreover', 'pierce', 'gaze', 'attend', 'tear-able', 'beacon', 'surrendered',
    'hilarious', 'bluffing', 'humble', 'upon', 'make no mistake', 'loud', 'driven', 'chalk', 'carpet', 'hinted',
    'thought', 'crumble', 'otherwise', 'runway', 'kidding', 'taping', 'research', 'hang out', 'go out', 'get out',
    'out there', 'see ya', 'bay', 'straight', 'miss', 'leper', 'disband', 'taught', 'witnessed', 'witness', 'dean',
    'behave', 'rotten', 'rising', 'indeed', 'vile', 'leverage', 'praise', 'filled', 'touch', 'hug', 'spinning',
    'grin', 'grinning', 'sunshine', 'spread', 'lease', 'hoops', 'over there', 'couple', 'forth', 'supposed to say',
    'mood', 'beat', 'strip mall', 'wires', 'still', 'jacked up', 'deer', 'billboard', 'choked', 'allow', 'I mean',
    'I mean it', 'tough', 'liking it', 'scrap', 'owl', 'wooden', 'have a cold', 'toe', 'delayed', 'shortage',
    'so far', 'encountered', 'overcome', 'wealthy', 'scared', 'portray', 'swept', 'goodspeed', 'broom', 'he sat',
    'borrowed', 'physics', 'chemistry', 'his', 'her', 'meaningful', 'alright', 'jam', 'sausage', 'earlier', 'noon',
    'midnight', 'warrants', 'relocated', 'allowance', 'loneliest', 'beats working', 'wings', 'downtown', 'clever',
    'wink', 'backpacks', 'crumbs', 'mess it up', 'briefcase', 'bring me', 'got caught', 'awake', 'wake up', 'spark',
    'tracker', 'labor union', 'teamed up', 'trial', 'hush', 'spoons', 'beekeeper', 'foreign', 'armchair', 'dresser',
    'sink', 'furniture', 'pillow', 'neighbor', 'nearly', 'blanket', 'luggage', 'bring', 'instead', 'wore', 'raincoats',
    'owe', 'lend', 'bill', 'quarter', 'anymore', 'seeing', 'suppose', 'actually', 'daunting', 'profound', 'raised me',
    'reminder', 'fierce', 'appear', 'noteworthy', 'charm'
  ];


  private AltoC1: string[] = [
    'gimme'
  ]


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

  getWordsAlto(): string[] {
    return this.AltoC1;
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
  'sugerir','repentino', 'ritmo', 'desanimado', 'sin embargo', 'impermeable', 'espantoso', 'apetito', 'a pesar de', 'obra maestra',
  'asegurar', 'locura', 'apoyo', 'deseo', 'asegurar','cineasta', 'adolorido', 'duquesa', 'cierto/certero', 'declaración', 'valioso/digno',
  'escalofriante', 'pecera', 'corona', 'sordo', 'calidez', 'mariscos', 'crédulo', 'guardaespaldas', 'lugar/sitio', 'pista', 'sospechoso',
  'codicioso', 'fallo/fracaso', 'estampilla', 'difuso/confuso', 'ladrillo', 'despedido', 'torpe', 'advertir','encantador','hasta', 'ingenuo',
  'rencores', 'niño/niña', 'insistente/agresivo','viaje', 'muelle', 'pecera', 'hipoteca', 'azulejo'
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


private intermedioAltoB2Res: string[] = [
  'confianza', 'puente', 'víctimas', 'liderar', 'a lo largo de', 'preparado', 'herido', 'culpable', 'restos', 'sospecha',
  'inútil', 'bostezar', 'fangoso', 'cortar el césped', 'estanque', 'césped', 'pulgar', 'morir de hambre', 'además', 'bigote',
  'impredecible', 'desaparecido', 'isla', 'reina', 'conejo', 'paisaje', 'escarcha', 'arcoiris', 'dividir', 'relajarse',
  'adelante', 'agarrador', 'obstinado', 'destino', 'más allá de', 'encantador', 'acompañar', 'dudoso', 'ninguno/ni', 'breve',
  'preocupación', 'generalizado', 'renacimiento', 'brevemente', 'consciente', 'salario', 'aplaudir', 'más lejano', 'cinturón de seguridad', 'limpiar',
  'envoltorio', 'delicioso', 'fallecer', 'explicar', 'presupuesto', 'no rendirse nunca', 'abandonar/rendirse', 'cualquiera', 'un poco de', 'cosa',
  'sin embargo', 'sin embargo', 'poder pagar', 'además', 'atravesar', 'mirada', 'asistir', 'desagradable', 'faro', 'rendido',
  'gracioso', 'farol', 'humilde', 'sobre/encima de', 'no cometer errores', 'fuerte/ruidoso', 'impulsado', 'tiza', 'alfombra', 'insinuó',
  'pensamiento/reflexión', 'desmoronarse', 'de lo contrario', 'pista', 'bromear', 'grabando', 'investigación', 'pasar el rato', 'salir', 'salir',
  'allá afuera', 'nos vemos', 'bahía', 'hetero', 'extrañar', 'leproso', 'disolver/desmantelar', 'enseñó', 'presenciado', 'testigo', 'decano',
  'comportarse', 'podrido', 'subida', 'en efecto/en realidad', 'vil', 'aprovechar', 'elogio/alabanza', 'completado/lleno', 'tacto/tocar', 'abrazar',
  'girando', 'sonreír', 'sonriendo', 'luz del sol', 'propagar/esparcir', 'alquiler', 'aros', 'allá', 'par/pareja', 'adelante', 'suponer que debe decir',
  'ánimo', 'derrotar/latido', 'centro comercial', 'alambres/cables', 'todavía/aún', 'levantado', 'ciervo', 'cartelera/anuncio', 'atragantarse',
  'permitir', 'quiero decir', 'lo digo en serio', 'duro', 'me está gustando', 'chatarra', 'búho', 'de madera', 'resfriarse', 'dedo del pie',
  'demora/retardo', 'escasez', 'hasta ahora', 'encontrado', 'superar o vencer obstáculos', 'adinerado', 'asustado', 'retrato/representación',
  'barrer', 'buena suerte', 'escoba', 'se sentó', 'tomar prestado', 'física', 'química', 'su (de él)', 'su (de ella)', 'significativo', 'bien',
  'mermelada', 'salchicha', 'más temprano', 'mediodía', 'medianoche', 'garantías', 'reubicado', 'prestación', 'más solitario', 'es mejor que trabajar',
  'alas', 'centro de la ciudad', 'inteligente', 'guiño', 'mochilas', 'migajas', 'echarlo a perder', 'maletín', 'tráeme', 'quedar atrapado',
  'despierto', 'despertar', 'chispa', 'rastreador', 'sindicato', 'unido (como equipo)', 'ensayo/juicio', 'silencio', 'cucharas', 'apicultor',
  'extranjero', 'sillón', 'vestidor/cómoda', 'fregadero/lavaplatos', 'muebles', 'almohada', 'vecino', 'casi/cerca de', 'manta/frazada', 'equipaje',
  'traer', 'en cambio', 'vistió/llevó puesto', 'impermeables', 'deber algo/deuda', 'prestar', 'billete/factura', 'cuarto/moneda de 25', 'ya/nunca más',
  'viendo/saliendo con alguien', 'suponer', 'en realidad/de hecho', 'desalentador', 'profundo', 'me crió', 'recordatorio', 'intenso', 'aparecer',
  'notable', 'encanto'
];

private AltoC1Res: string[] = [
  'dame'
]



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

getWordsAltoRes(): string[] {
  return this.AltoC1Res;
}


  
}
