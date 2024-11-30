import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLevel2Service {

  ///////////////////////////////////// Expresiones Coloquiales ////////////////

  private expresionColoquial: string[] = [
    'Buddy', 'Pops', 'Ma', 'Kid', 'Ride', 'Pad', 'Booze', 'Boss', 'Bro', 'Mate', 
    'Fuzz', 'Cool', 'Screw-up', 'Bucks', 'Grub', 'Brainy', 'Pissed', 'Chill', 'Chat', 'Yummy', 
    'Stroll', 'Munch', 'Jog', 'Threads', 'Kicks', 'Chow', 'Ticked Off', 'Loaded', 'Swipe', 'Fuzz', 
    'Stunning', 'Pricey', 'Dirt Cheap', 'Blunder', 'Down', 'Over the Moon', 'Gig', 'Heated', 'Wiped Out', 'Cute', 
    'Lame', 'Bubbly', 'Ancient', 'Teen', 'Bargain', 'Huge', 'Mini', 'Tough', 'Chill', 'Risky', 
    'Hilarious', 'Beat'
  ];

  getexpresionColoquial(): string[] {
    return this.expresionColoquial;
  }
  
  private expresionFormal: string[] = [
    'Friend', 'Father', 'Mother', 'Child', 'Automobile', 'Residence', 'Beverage', 'Employer', 'Sibling', 'Companion', 
    'Cop', 'Excellent', 'Mistake', 'Money', 'Dinner', 'Intelligent', 'Angry', 'To Relax', 'To Speak', 'Delicious', 
    'To Walk', 'To Eat', 'To Run', 'Clothes', 'Shoes', 'Food', 'Angry', 'Wealthy', 'To Steal', 'Police Officer', 
    'Beautiful', 'Expensive', 'Cheap', 'Mistake', 'Sad', 'Happy', 'Work', 'Angry', 'Sleepy', 'Attractive', 
    'Boring', 'Energetic', 'Old', 'Young', 'Cheap', 'Big', 'Small', 'Difficult', 'Easy', 'Dangerous', 
    'Funny', 'Tired'
  ];

  getexpresionFormal(): string[] {
    return this.expresionFormal;
  }

  ///////////////////////////////////// Verbos Irregulares ////////////////

  // Arreglo con verbos irregulares en presente
  private irregularPresent: string[] = [
    'arise', 'awake', 'be', 'bear', 'beat', 'become', 'begin', 'bend', 'bet', 'bind',
    'bite', 'bleed', 'blow', 'break', 'bring', 'build', 'burn', 'buy', 'catch', 'choose',
    'come', 'cost', 'cut', 'deal', 'dig', 'do', 'draw', 'dream', 'drink', 'drive',
    'eat', 'fall', 'feed', 'feel', 'fight', 'find', 'fly', 'forget', 'forgive', 'freeze',
    'get', 'give', 'go', 'grow', 'hang', 'have', 'hear', 'hide', 'hit', 'hold'
  ];

  getirregularPresent(): string[] {
    return this.irregularPresent;
  }
  
  // Arreglo con los equivalentes en pasado de los verbos en presente
private  irregularPast: string[] = [
    'arose', 'awoke', 'was/were', 'bore', 'beat', 'became', 'began', 'bent', 'bet', 'bound',
    'bit', 'bled', 'blew', 'broke', 'brought', 'built', 'burnt/burned', 'bought', 'caught', 'chose',
    'came', 'cost', 'cut', 'dealt', 'dug', 'did', 'drew', 'dreamt/dreamed', 'drank', 'drove',
    'ate', 'fell', 'fed', 'felt', 'fought', 'found', 'flew', 'forgot', 'forgave', 'froze',
    'got', 'gave', 'went', 'grew', 'hung', 'had', 'heard', 'hid', 'hit', 'held'
  ];

  getirregularPast(): string[] {
    return this.irregularPast;
  }


  ///////////////////////////////////// Sinonimos ////////////////


  ///////////////////////////////////// Expresiones Frecuentes ////////////////


}
