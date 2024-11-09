import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntercambioDatosService {

  private cantidad: number = 0;
  private nivel: string = '';
  private resultadoSubject = new BehaviorSubject<number>(0); // Nuevo BehaviorSubject para resultado


  //Usando BehaviorSubject para numero de respuestas correctas e incorrectas
  private respuestasCorrectasSubject = new BehaviorSubject<number>(0);
  private respuestasIncorrectasSubject = new BehaviorSubject<number>(0);

  respuestasCorrectas$ = this.respuestasCorrectasSubject.asObservable();
  respuestasIncorrectas$ = this.respuestasIncorrectasSubject.asObservable();
  resultado$ = this.resultadoSubject.asObservable(); // Observable para resultado

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

  // Método para establecer el valor de resultado tiempo disponible
  setResultado(value: number) {
    this.resultadoSubject.next(value);
  }

  // Método para obtener el valor actual de resultado tiempo disponible
  getResultado(): number {
    return this.resultadoSubject.getValue();
  }

  // Método para establecer el valor de respuestas correctas
  setCantidadRespCorrectas(value: number) {
    this.respuestasCorrectasSubject.next(value);
  }

  // Método para establecer el valor de respuestas incorrectas
  setCantidadRespIncorrectas(value: number) {
    this.respuestasIncorrectasSubject.next(value);
  }

  // Método para obtener el valor actual de respuestas correctas
  getCantidadRespCorrectas(): number {
    return this.respuestasCorrectasSubject.getValue();
  }

  // Método para obtener el valor actual de respuestas incorrectas
  getCantidadRespIncorrectas(): number {
    return this.respuestasIncorrectasSubject.getValue();
  }


}