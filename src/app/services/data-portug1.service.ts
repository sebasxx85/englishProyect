import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataPortug1Service {

  private principianteA0: string[] = [
    'maçã', 'banana', 'cereja', 'tâmara', 'elefante', 'peixe', 'uva', 'casa', 'ilha', 'jaqueta',
    'canguru', 'limão', 'macaco', 'caderno', 'laranja', 'lápis', 'rainha', 'coelho', 'sol', 'tigre',
    'azul', 'vermelho', 'verde', 'rei'
  ];
  
  private basicoA1: string[] = [
    'gato', 'cachorro', 'livro', 'carro', 'árvore', 'água', 'mesa', 'janela', 'porta', 'cadeira',
    'escola', 'bola', 'flor', 'rua', 'relógio', 'xícara', 'camisa', 'sapato', 'cama', 'lâmpada',
    'vinho', 'dormir', 'sonho', 'também', 'goma de mascar'
  ];
  
  private basicoAltoA2: string[] = [
    'guardanapo', 'de jeito nenhum', 'lamentou', 'poluição', 'por um bom tempo', 'cabana', 'tenho que', 'ameaça', 'dever', 'hoje em dia',
    'tendência', 'filmagem', 'testa', 'comprador compulsivo', 'dobrar', 'enganar', 'felizmente', 'decepcionante', 'tricotar', 'casa',
    'rainha', 'coelho', 'bandeja', 'sofá', 'lagosta', 'uma vez', 'ambos', 'almôndegas', 'também', 'longe',
    'cidade natal', 'desaparecer', 'chaveiro', 'micro-ondas', 'costurar', 'nojento', 'seda', 'de qualquer forma', 'amargo', 'farinha',
    'sugerir', 'repentino', 'ritmo', 'desencorajado', 'no entanto', 'à prova d\'água', 'horrível', 'apetite', 'apesar de', 'obra-prima',
    'garantir', 'loucura', 'apoiar', 'desejo', 'assegurar', 'cineasta', 'dolorido', 'duquesa', 'certo', 'declaração', 'digno', 'assustador',
    'aquário', 'coroa', 'surdo', 'calor', 'frutos do mar', 'ingênuo', 'segurança', 'local', 'pista', 'suspeito', 'ganancioso', 'fracasso'
  ];
  
  private intermedioB1: string[] = [
    'gravata', 'adiar', 'principalmente', 'desafiador', 'chateado', 'com antecedência', 'confiável', 'egoísta', 'para-choque', 'provável', 
    'enquanto isso', 'parcialmente', 'contanto que', 'encorajador', 'emboscada', 'laticínios', 'contente', 'caranguejo', 'processar', 'ilha',
    'jaqueta', 'rainha', 'coelho', 'lápis', 'limão', 'papelão', 'supostamente', 'afiado', 'entre', 'amigo',
    'sombrio', 'qualificar', 'lustre', 'pecado', 'buquê', 'noiva', 'toalha de mesa', 'desastre', 'rachaduras', 'porão',
    'descobrir', 'também', 'frequentemente', 'sobras', 'mastigar', 'libertação', 'estragar', 'discurso', 'pepino', 'fofoca',
    'gado', 'campo', 'tornozelo', 'talheres', 'granulado', 'hesitar', 'atencioso', 'alívio', 'cerâmica',
    'principal', 'fora de estrada', 'embora', 'barraca', 'corretamente', 'exceder', 'útil', 'adivinhar',
    'sentido', 'preso', 'desesperadamente', 'raio', 'boa tarde', 'bom dia', 'boa noite', 'discutir',
    'cruzamento', 'pular', 'salto', 'qualquer coisa', 'fique quieto', 'cale-se', 'vale a pena', 'fraude', 'trilha', 'venda', 'maquiagem',
    'farmácia', 'derramamento', 'molho', 'inofensivo', 'artigos de higiene', 'escovado', 'barba', 'fio dental', 'patinar', 'esqui',
    'júri', 'educado', 'decolar', 'alho', 'menos', 'assar', 'libras', 'fatia', 'litros', 'ladrão', 'culpa',
    'alcançar', 'aconchegante', 'confortável', 'poste', 'aquecedor', 'frio', 'lareira', 'arruinar', 'arco', 'morto', 'fiação',
    'elegante', 'campainha', 'linha de montagem', 'alcançar', 'riscar', 'banheira', 'violação', 'vitrine', 'fogão', 'dar um passo à frente',
    'recibo', 'roubo', 'cenouras', 'separação', 'receita', 'apressar-se', 'conhecimento', 'ligação', 'retrato',
    'cético', 'além disso', 'defeitos', 'fila', 'empreendimento', 'padrões', 'refém', 'estaca', 'segurar', 'no geral', 'padaria'
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
