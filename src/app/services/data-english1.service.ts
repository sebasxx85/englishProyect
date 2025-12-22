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
    'wine', 'sleep', 'dream', 'also', 'gum', 'skull', 'nightmare','jam','request','advice', 'through',
    'sorrow','far away','as such','clown','solemn','granted','blueprint','agree','disagree', 'grateful', 'barley'
  ];

  private basicoAltoA2: string[] = [
    'napkin', 'no way', 'regretted', 'pollution', 'quite a while', 'shack', 'gotta', 'threat', 'have to', 'nowadays', 
    'trend', 'footage', 'forehead', 'shopaholic', 'fold', 'deceive','luckily', 'disappointing', 'knit', 'house', 
    'queen', 'rabbit', 'tray', 'couch', 'lobster', 'once', 'both', 'meatballs', 'too', 'away', 
    'hometown', 'vanish', 'keychain', 'microwave', 'sew', 'gross', 'silk', 'anyway','bitter','flour',
    'suggest','sudden', 'rhythm', 'discouraged', 'nevertheless', 'waterproof', 'hideous', 'appetite', 'despite', 'masterpiece',
    'ensure', 'madness', 'support','desire', 'assure', 'filmmaker','sore', 'duchess', 'certain', 'statement', 'worthy', 'spooky',
    'fish tank', 'crown', 'deaf', 'warmth', 'seafood', 'gullible', 'bodyguard', 'venue', 'clue', 'suspect', 'greedy', 'failure',
    'postage stamp', 'fuzzy', 'brick', 'fired', 'clumsy','warn', 'lovely', 'until', 'naive', 'grudges', 'kiddo', 'pushy',
    'voyage', 'dock', 'fish tank', 'mortgage', 'tile', 'hire','hopefully','easier','homeless','take cover','strike','brings',
    'improvements','cheats','held','confidence','unable','warehouse','fact','somehow','leaf','sheet','polite', 'released',
    'rioters', 'smuggler','cabinet', 'choir','charisma', 'dearth','efface','dreamt','pray','steep','nook','pathway','rely on',
    'approach','enhance','demonstrate','moreover','purchase','exploit','stir','fluently','receipt', 'front desk','tight',
    'isolated', 'certain', 'disgusting', 'regardless', 'hanging out', 'hurtful', 'willing', 'rather', 'therefore', 'meantime',
    'march'
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
    'skeptical', 'besides', 'flaws', 'queue', 'enterprise', 'patterns','hostage', 'stake', 'hold', 'overall', 'bakery',
    'accuracy','accountable','firecracker','realized','regrettable','brought','salted','stew','hidden','swear', 'improve',
    'upon', 'toward', 'pull over'
  ];

  private intermedioAltoB2: string[] = [
  'confidence', 'bridge', 'casualties', 'lead', 'along', 'prepped', 'wounded', 'guilty', 'remains', 'suspicion',
  'useless', 'yawn', 'muddy', 'mowing', 'pond', 'lawn', 'thumb', 'starve', 'furthermore', 'mustache',
  'unpredictable', 'disappeared', 'island', 'queen', 'rabbit', 'landscape', 'frost', 'rainbow', 'split', 'chill out',
  'ahead', 'grabby', 'stubborn', 'fate', 'beyond', 'delightful', 'come along', 'doubtful', 'neither', 'brief',
  'concern', 'widespread', 'renaissance', 'briefly', 'aware', 'wage', 'clap', 'farthest', 'seatbelt', 'clean up',
  'wrapper', 'yummy', 'passed away', 'explain', 'budget', 'never give up', 'giving up', 'either', 'kinda', 'stuff',
  'however', 'nevertheless', 'afford', 'moreover', 'pierce', 'gaze', 'attend', 'tearable', 'beacon', 'surrendered',
  'hilarious', 'bluffing', 'humble', 'upon', 'make no mistake', 'loud', 'driven', 'chalk', 'carpet', 'hinted',
  'thought', 'crumble', 'otherwise', 'runway', 'kidding', 'taping', 'research', 'hang out', 'go out', 'get out',
  'out there', 'see ya', 'bay', 'straight', 'miss', 'leper', 'disband', 'taught', 'witnessed', 'witness', 'dean',
  'behave', 'rotten', 'rising', 'indeed', 'vile', 'leverage', 'praise', 'filled', 'touch', 'hug', 'spinning',
  'grin', 'grinning', 'sunshine', 'spread', 'lease', 'hoops', 'over there', 'couple', 'forth', 'supposed to say',
  'mood', 'beat', 'strip mall', 'wires', 'still', 'jacked up', 'deer', 'billboard', 'choked', 'allow', 'I mean',
  'I mean it', 'tough', 'liking it', 'scrap', 'owl', 'wooden', 'have a cold', 'toe', 'delayed', 'shortage',
  'so far', 'encountered', 'overcome', 'wealthy', 'scared', 'portray', 'swept', 'godspeed', 'broom', 'he sat',
  'borrowed', 'physics', 'chemistry', 'his', 'her', 'meaningful', 'alright', 'jam', 'sausage', 'earlier', 'noon',
  'midnight', 'warrants', 'relocated', 'allowance', 'loneliest', 'beats working', 'wings', 'downtown', 'clever',
  'wink', 'backpack', 'crumbs', 'mess it up', 'briefcase', 'bring me', 'got caught', 'awake', 'wake up', 'spark',
  'tracker', 'labor union', 'teamed up', 'trial', 'hush', 'spoons', 'beekeeper', 'foreign', 'armchair', 'dresser',
  'sink', 'furniture', 'pillow', 'neighbor', 'nearly', 'blanket', 'luggage', 'bring', 'instead', 'wore', 'raincoats',
  'owe', 'lend', 'bill', 'quarter', 'anymore', 'seeing', 'suppose', 'actually', 'daunting', 'profound', 'raised me',
  'reminder', 'fierce', 'appear', 'noteworthy', 'charm', 'crawl', 'seldom', 'struck', 'carriage', 'mostly', 'feature',
  'accountability', 'tasteless'
];


 private AltoC1: string[] = [
  'gimme', 'piss off', 'come undone', 'falling apart', 'unlawful', 'struggles', 'troublemaker', 'go over to', 'goosebumps',
  'runs out', 'mutual friend', 'bucks', 'pal', 'see ya', 'booze', 'grub', 'chill', 'nuts', 'moron', 'brainy', 'mess', 'concerned',
  'goddamn', 'get lost', 'bail out', 'screw you', 'jacked up', 'bummed out', 'beat it', 'zonked', 'blow off', 'lose it',
  'flip out', 'cringe', 'ripped', 'wasted', 'savage', 'take it on', 'I hope so', 'by the way', 'my treat', 'what a pity',
  'all set', 'so what', 'puppy love', 'chill out', 'turn into', 'homies', 'hush', 'what a shame', 'dude', 'shape up',
  'quite a while', 'once again', 'thrills', 'running out', 'breakthrough'
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
  'gato', 'perro', 'libro', 'coche', 'árbol', 'agua', 'mesa', 'ventana', 'puerta', 'silla',
  'escuela', 'pelota', 'flor', 'calle', 'reloj', 'taza', 'camisa', 'zapato', 'cama', 'lámpara',
  'vino', 'dormir', 'sueño', 'también', 'chicle/goma', 'cráneo', 'pesadilla', 'mermelada',
  'solicitud/petición', 'consejo','a través de/mediante','pena/aflicción','lejos','tal como',
  'payaso','solemne','otorgado/concedido','plano/plan','estar de acuerdo','no estar de acuerdo',
  'agradecido','cebada'
];


private basicoAltoA2Res: string[] = [
  'servilleta', 'de ninguna manera', 'lamentó', 'contaminación', 'bastante tiempo', 'choza', 'tengo que', 'amenaza', 'tener que', 'hoy en día',
  'tendencia', 'metraje', 'frente', 'comprador compulsivo', 'doblar', 'engañar', 'afortunadamente', 'decepcionante', 'tejer', 'casa',
  'reina', 'conejo', 'bandeja', 'sofá', 'langosta', 'una vez', 'ambos', 'albóndigas', 'también', 'lejos',
  'ciudad natal', 'desaparecer', 'llavero', 'microondas', 'coser', 'asqueroso/bruto', 'seda', 'de todos modos', 'amargo', 'harina',
  'sugerir', 'repentino', 'ritmo', 'desanimado', 'sin embargo', 'impermeable', 'espantoso', 'apetito', 'a pesar de', 'obra maestra',
  'asegurar', 'locura', 'apoyo', 'deseo', 'asegurar', 'cineasta', 'adolorido', 'duquesa', 'cierto/certero', 'declaración', 'valioso/digno',
  'escalofriante', 'pecera', 'corona', 'sordo', 'calidez', 'mariscos', 'crédulo', 'guardaespaldas', 'lugar/sitio', 'pista', 'sospechoso',
  'codicioso', 'fallo/fracaso', 'estampilla', 'difuso/confuso', 'ladrillo', 'despedido', 'torpe', 'advertir', 'encantador', 'hasta',
  'ingenuo', 'rencores', 'niño/niña', 'insistente/agresivo', 'viaje', 'muelle', 'pecera', 'hipoteca', 'azulejo',
  'contratar/emplear', 'con suerte/ojalá', 'más fácil', 'sin hogar', 'refugiarse', 'huelga/ataque', 'traer', 'mejoras',
  'engaños/trampas', 'retenido/sostenido', 'confianza', 'incapaz', 'almacén', 'el hecho', 'de alguna manera',
  'hoja de planta', 'hoja de papel', 'educado/cortés', 'liberado/publicado', 'alborotadores', 'contrabandista', 'gabinete',
  'coro', 'carisma', 'escasez', 'borrar/eliminar', 'soñado', 'orar', 'empinado', 'rincón', 'camino/sendero', 'confiar',
  'enfoque/acercarse', 'mejorar', 'demostrar', 'además', 'comprar', 'usar/aprovechar', 'remover/revolver',
  'con fluidez', 'recibo', 'recepción', 'ajustado/ceñido', 'aislado', 'cierto', 'asqueroso/repugnante',
  'a pesar de todo', 'pasar el rato', 'dañino/hiriente', 'dispuesto', 'bastante/más bien', 'por lo tanto',
  'mientras tanto', 'marzo/caminata'
];



private intermedioB1Res: string[] = [
  'corbata', 'posponer', 'mayormente', 'desafiante', 'molesto', 'con anticipación', 'confiable', 'egoísta', 'parachoques', 'probable',
  'mientras tanto', 'parcialmente', 'siempre que', 'alentador', 'emboscada', 'lácteos', 'contento', 'cangrejo', 'demandar', 'isla',
  'chaqueta', 'reina', 'conejo', 'lápiz', 'limón', 'cartón', 'supuestamente', 'afilado', 'entre', 'amigo',
  'sospechoso', 'calificar', 'candelabro', 'pecado', 'ramo', 'novia', 'mantel', 'desastre', 'grietas', 'sótano',
  'averiguar/descubrir', 'también', 'a menudo', 'sobras', 'masticar', 'liberación', 'equivocarse/estropear', 'discurso', 'pepino', 'chisme',
  'ganado', 'campo', 'tobillo', 'cubiertos', 'chispas', 'dudar', 'considerado', 'alivio', 'cerámica',
  'principal', 'fuera de camino', 'aunque', 'puesto/pararse', 'correctamente', 'superar', 'útil', 'adivinar',
  'sentido', 'atrapado', 'desesperadamente', 'relámpago', 'buenas tardes', 'buenos días', 'buenas noches', 'discutir/conversar',
  'encrucijada', 'saltar', 'brincar', 'cualquiera', 'cállate', 'cállate', 'vale la pena', 'engaño/impostura', 'pista/camino',
  'oferta/venta', 'maquillaje', 'farmacia', 'derrames', 'aderezo/vendaje', 'inofensivo', 'artículos de aseo', 'cepillado',
  'barba', 'hilo dental', 'patinar', 'esquí', 'jurado', 'cortés', 'quitarse/despegar', 'ajo', 'menos',
  'asando', 'libras', 'rebanada', 'litros', 'ladrón', 'culpar', 'contactar', 'acogedor', 'cómodo',
  'poste/polo', 'calefactores', 'frío', 'chimenea', 'arruinar', 'arco', 'falleció', 'cableado',
  'elegante', 'timbre', 'línea de ensamblaje', 'lograr', 'rasguñar', 'bañera', 'brecha',
  'vitrina', 'estufa', 'dar un paso adelante', 'recibo', 'robando', 'zanahorias',
  'ruptura/separación', 'receta', 'apurarse', 'conocimiento', 'llamar/decidir', 'retrato',
  'escéptico', 'además', 'defectos', 'cola', 'empresa/emprendimiento', 'patrones','rehén', 'apuesta/riesgo', 
  'sostener', 'en general', 'panadería','exactitud/precisión', 'responsable', 'petardo', 'darse cuenta', 'lamentable','trajo', 
  'salado', 'guiso', 'oculto', 'jurar', 'mejorar', 'sobre', 'hacia','detenerse (manejo)'
];


private intermedioAltoB2Res: string[] = [
  'confianza', 'puente', 'víctimas', 'liderar', 'a lo largo de', 'preparado', 'herido', 'culpable', 'restos', 'sospecha',
  'inútil', 'bostezar', 'fangoso', 'cortar el césped', 'estanque', 'césped', 'pulgar', 'morir de hambre', 'además', 'bigote',
  'impredecible', 'desaparecido', 'isla', 'reina', 'conejo', 'paisaje', 'escarcha', 'arcoíris', 'dividir', 'relajarse',
  'adelante', 'manoseador', 'obstinado', 'destino', 'más allá de', 'encantador', 'acompañar', 'dudoso', 'ninguno/ni', 'breve',
  'preocupación', 'generalizado', 'renacimiento', 'brevemente', 'consciente', 'salario', 'aplaudir', 'más lejano', 'cinturón de seguridad', 'limpiar',
  'envoltorio', 'delicioso', 'fallecer', 'explicar', 'presupuesto', 'no rendirse nunca', 'rendirse', 'cualquiera', 'más o menos', 'cosas',
  'sin embargo', 'sin embargo', 'poder pagar', 'además', 'perforar/atravesar', 'mirada', 'asistir', 'que se puede rasgar', 'faro', 'rendido',
  'hilarante', 'faroleando', 'humilde', 'sobre', 'no cometer errores', 'ruidoso', 'impulsado', 'tiza', 'alfombra', 'insinuó',
  'pensamiento', 'desmoronarse', 'de lo contrario', 'pista de aterrizaje', 'bromeando', 'grabando', 'investigación', 'pasar el rato', 'salir', 'salir',
  'por ahí', 'nos vemos', 'bahía', 'recto', 'extrañar', 'leproso', 'disolver', 'enseñó', 'presenciado', 'testigo', 'decano',
  'comportarse', 'podrido', 'en aumento', 'en efecto', 'vil', 'aprovechar', 'elogio', 'lleno', 'tocar', 'abrazar',
  'girando', 'sonrisa', 'sonriendo', 'luz solar', 'propagar', 'alquiler', 'aros', 'por allá', 'par', 'adelante',
  'se supone que diga', 'estado de ánimo', 'latido/derrotar', 'centro comercial', 'cables', 'todavía', 'estropeado', 'ciervo', 'cartel publicitario', 'atragantarse',
  'permitir', 'quiero decir', 'lo digo en serio', 'duro', 'me gusta', 'chatarra', 'búho', 'de madera', 'estar resfriado', 'dedo del pie',
  'retrasado', 'escasez', 'hasta ahora', 'encontrado', 'superar', 'adinerado', 'asustado', 'representar', 'barrer', 'buena suerte',
  'escoba', 'se sentó', 'prestado', 'física', 'química', 'su (de él)', 'su (de ella)', 'significativo', 'bien', 'mermelada',
  'salchicha', 'más temprano', 'mediodía', 'medianoche', 'garantiza', 'reubicado', 'asignación', 'el más solitario', 'es mejor que trabajar', 'alas',
  'centro de la ciudad', 'inteligente', 'guiñar', 'mochila', 'migajas', 'arruinarlo', 'maletín', 'tráeme', 'atrapado', 'despierto',
  'despertar', 'chispa', 'rastreador', 'sindicato', 'unidos', 'juicio', 'silencio', 'cucharas', 'apicultor', 'extranjero',
  'sillón', 'cómoda', 'fregadero', 'muebles', 'almohada', 'vecino', 'casi', 'manta', 'equipaje', 'traer',
  'en lugar de', 'vistió', 'impermeables', 'deber', 'prestar', 'factura', 'cuarto/moneda', 'ya no', 'saliendo con alguien', 'suponer',
  'de hecho', 'desalentador', 'profundo', 'me crió', 'recordatorio', 'feroz', 'aparecer', 'digno de mención', 'encanto',
  'arrastrarse', 'raramente', 'golpeado', 'carruaje', 'principalmente', 'característica', 'responsabilidad', 'insípido'
];


private AltoC1Res: string[] = [
  'dame', 'lárgate', 'desarmarse', 'desmoronarse', 'ilegal', 'luchas', 'alborotador', 'visitar', 'escalofríos',
  'agotarse', 'amigo común', 'dólares', 'amigo', 'adiós', 'alcohol', 'comida', 'relajarse', 'loco', 'idiota',
  'inteligente', 'desorden', 'preocupado', 'maldito', 'piérdete', 'rescatar', 'jódete', 'estropeado', 'deprimido',
  'lárgate', 'agotado', 'ignorar', 'perder control', 'enloquecer', 'vergüenza', 'musculoso', 'borracho', 'brutal',
  'enfrentarlo', 'eso espero', 'por cierto', 'invito', 'qué pena', 'listo', '¿y qué?', 'amor juvenil',
  'relajarse', 'convertirse', 'amigos', 'silencio', 'qué vergüenza', 'tipo', 'mejorar',
  'buen rato', 'otra vez', 'emoción', 'agotándose', 'avance'
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

getWordsAltoRes(): string[] {
  return this.AltoC1Res;
}

  
}
