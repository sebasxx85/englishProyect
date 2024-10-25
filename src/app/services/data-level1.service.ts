import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataLevel1Service {

  // Arreglo de palabras en inglés
  private words: string[] = [
    'apple', 'banana', 'cherry', 'date', 'elephant', 'fish', 'grape', 
    'house', 'island', 'jacket', 'kangaroo', 'lemon', 'monkey', 'notebook', 
    'orange', 'pencil', 'queen', 'rabbit', 'sun', 'tiger'
  ];

  // Método para obtener las palabras
  getWords(): string[] {
    return this.words;
  }
  
}
