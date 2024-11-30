import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLevel2Service {

  private expresionColoquial: string[] = [
    'Buddy', 'Pops', 'Ma', 'Kid', 'Ride', 'Pad', 'Booze', 'Boss', 'Bro', 'Mate', 
    'Fuzz', 'Cool', 'Screw-up', 'Bucks', 'Grub', 'Brainy', 'Pissed', 'Chill', 'Chat', 'Yummy', 
    'Stroll', 'Munch', 'Jog', 'Threads', 'Kicks', 'Chow', 'Ticked Off', 'Loaded', 'Swipe', 'Fuzz', 
    'Stunning', 'Pricey', 'Dirt Cheap', 'Blunder', 'Down', 'Over the Moon', 'Gig', 'Heated', 'Wiped Out', 'Cute', 
    'Lame', 'Bubbly', 'Ancient', 'Teen', 'Bargain', 'Huge', 'Mini', 'Tough', 'Chill', 'Risky', 
    'Hilarious', 'Beat'
  ];

  getWordsColoquial(): string[] {
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

  getWordsFormal(): string[] {
    return this.expresionFormal;
  }


}
