import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntercambioDatosService {

  private cantidad: number = 0;
  private nivel: string = '';

  constructor() { }

  // Método para establecer el valor de cantidad
  setCantidad(value: number) {
    this.cantidad = value;
  }

  // Método para obtener el valor de cantidad
  getCantidad(): number {
    return this.cantidad;
  }

  // Método para establecer el valor nivel ingles
  setNivelIdioma(value: string) {
    this.nivel = value;
  }

  // Método para obtener el valor nivel ingles
  getNivelIdioma(): string {
    return this.nivel;
  }

  
}