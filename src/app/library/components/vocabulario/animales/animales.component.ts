import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

interface Entrada {
  animal: string;
  traduccion: string;
  ejemplo: string;
}

@Component({
  selector: 'app-animales',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatButtonModule, MatDividerModule],
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss']
})
export class AnimalesComponent {
  title = 'Animales en inglés';

  animales: Entrada[] = [
    { animal: 'Cat', traduccion: 'Gato', ejemplo: 'The cat is on the tree.' },
    { animal: 'Dog', traduccion: 'Perro', ejemplo: 'The dog is barking outside.' },
    { animal: 'Bird', traduccion: 'Pájaro', ejemplo: 'The bird is flying.' },
    { animal: 'Horse', traduccion: 'Caballo', ejemplo: 'The horse runs fast.' },
    { animal: 'Cow', traduccion: 'Vaca', ejemplo: 'The cow gives milk.' },
    { animal: 'Sheep', traduccion: 'Oveja', ejemplo: 'The sheep is in the field.' },
    { animal: 'Goat', traduccion: 'Cabra', ejemplo: 'The goat is climbing the hill.' },
    { animal: 'Pig', traduccion: 'Cerdo', ejemplo: 'The pig is rolling in the mud.' },
    { animal: 'Chicken', traduccion: 'Gallina', ejemplo: 'The chicken lays eggs.' },
    { animal: 'Rooster', traduccion: 'Gallo', ejemplo: 'The rooster crows every morning.' },
    { animal: 'Duck', traduccion: 'Pato', ejemplo: 'The duck is swimming in the pond.' },
    { animal: 'Goose', traduccion: 'Ganso', ejemplo: 'The goose is very loud.' },
    { animal: 'Rabbit', traduccion: 'Conejo', ejemplo: 'The rabbit eats carrots.' },
    { animal: 'Mouse', traduccion: 'Ratón', ejemplo: 'The mouse is small and fast.' },
    { animal: 'Rat', traduccion: 'Rata', ejemplo: 'The rat hides in the corner.' },
    { animal: 'Deer', traduccion: 'Ciervo', ejemplo: 'The deer runs through the forest.' },
    { animal: 'Bear', traduccion: 'Oso', ejemplo: 'The bear is sleeping in the cave.' },
    { animal: 'Wolf', traduccion: 'Lobo', ejemplo: 'The wolf howls at night.' },
    { animal: 'Fox', traduccion: 'Zorro', ejemplo: 'The fox is clever.' },
    { animal: 'Tiger', traduccion: 'Tigre', ejemplo: 'The tiger lives in the jungle.' },
    { animal: 'Lion', traduccion: 'León', ejemplo: 'The lion is the king of the jungle.' },
    { animal: 'Elephant', traduccion: 'Elefante', ejemplo: 'The elephant has big ears.' },
    { animal: 'Monkey', traduccion: 'Mono', ejemplo: 'The monkey climbs trees.' },
    { animal: 'Giraffe', traduccion: 'Jirafa', ejemplo: 'The giraffe has a long neck.' },
    { animal: 'Zebra', traduccion: 'Cebra', ejemplo: 'The zebra has black and white stripes.' },
    { animal: 'Snake', traduccion: 'Serpiente', ejemplo: 'The snake is long and quiet.' },
    { animal: 'Crocodile', traduccion: 'Cocodrilo', ejemplo: 'The crocodile lives in the river.' },
    { animal: 'Frog', traduccion: 'Rana', ejemplo: 'The frog jumps high.' },
    { animal: 'Toad', traduccion: 'Sapo', ejemplo: 'The toad is hiding under the leaf.' },
    { animal: 'Fish', traduccion: 'Pez', ejemplo: 'The fish swims in the water.' },
    { animal: 'Shark', traduccion: 'Tiburón', ejemplo: 'The shark has sharp teeth.' },
    { animal: 'Whale', traduccion: 'Ballena', ejemplo: 'The whale is very big.' },
    { animal: 'Dolphin', traduccion: 'Delfín', ejemplo: 'The dolphin is friendly.' },
    { animal: 'Octopus', traduccion: 'Pulpo', ejemplo: 'The octopus has eight arms.' },
    { animal: 'Crab', traduccion: 'Cangrejo', ejemplo: 'The crab walks sideways.' },
    { animal: 'Lobster', traduccion: 'Langosta', ejemplo: 'The lobster lives in the ocean.' },
    { animal: 'Butterfly', traduccion: 'Mariposa', ejemplo: 'The butterfly is colorful.' },
    { animal: 'Bee', traduccion: 'Abeja', ejemplo: 'The bee makes honey.' },
    { animal: 'Ant', traduccion: 'Hormiga', ejemplo: 'The ant carries food.' },
    { animal: 'Spider', traduccion: 'Araña', ejemplo: 'The spider spins a web.' },
    { animal: 'Bat', traduccion: 'Murciélago', ejemplo: 'The bat flies at night.' },
    { animal: 'Owl', traduccion: 'Búho', ejemplo: 'The owl sees in the dark.' },
    { animal: 'Parrot', traduccion: 'Loro', ejemplo: 'The parrot can talk.' },
    { animal: 'Peacock', traduccion: 'Pavo real', ejemplo: 'The peacock shows its feathers.' },
    { animal: 'Turkey', traduccion: 'Pavo', ejemplo: 'The turkey is big and noisy.' },
    { animal: 'Camel', traduccion: 'Camello', ejemplo: 'The camel lives in the desert.' },
    { animal: 'Donkey', traduccion: 'Burro', ejemplo: 'The donkey carries heavy things.' },
    { animal: 'Koala', traduccion: 'Koala', ejemplo: 'The koala sleeps a lot.' },
    { animal: 'Kangaroo', traduccion: 'Canguro', ejemplo: 'The kangaroo jumps far.' }
  ];

  esenciales = this.animales.slice(0, 10);

  mostrarSoluciones = false;

  // 15 ejercicios
  practica = [
    { frase: 'The ____ is barking outside.', solucion: 'dog' },
    { frase: 'The ____ has a long neck.', solucion: 'giraffe' },
    { frase: 'The ____ is swimming in the pond.', solucion: 'duck' },
    { frase: 'The ____ is the king of the jungle.', solucion: 'lion' },
    { frase: 'The ____ makes honey.', solucion: 'bee' },
    { frase: 'The ____ flies at night.', solucion: 'bat' },
    { frase: 'The ____ has big ears.', solucion: 'elephant' },
    { frase: 'The ____ climbs trees.', solucion: 'monkey' },
    { frase: 'The ____ is long and quiet.', solucion: 'snake' },
    { frase: 'The ____ is friendly in the ocean.', solucion: 'dolphin' },
    { frase: 'The ____ eats carrots.', solucion: 'rabbit' },
    { frase: 'The ____ lives in the jungle and has stripes.', solucion: 'tiger' },
    { frase: 'The ____ sees in the dark.', solucion: 'owl' },
    { frase: 'The ____ runs fast.', solucion: 'horse' },
    { frase: 'The ____ has sharp teeth and hunts in the sea.', solucion: 'shark' }
  ];
}
