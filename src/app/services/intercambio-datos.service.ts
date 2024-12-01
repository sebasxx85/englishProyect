import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntercambioDatosService {

  private cantidad: number = 0;
  private nivel: string = '';
  private tiempo: number = 0;
  private resultadoSubject = new BehaviorSubject<number>(0);
  // Arreglo para almacenar los últimos puntajes
  private puntajes: number[] = []; 


  //Usando BehaviorSubject 
  private respuestasCorrectasSubject = new BehaviorSubject<number>(0);
  private respuestasIncorrectasSubject = new BehaviorSubject<number>(0);
  //BehaviorSubject ultimos puntajes
  private puntajesSubject = new BehaviorSubject<number[]>([]);

  //Observables
  respuestasCorrectas$ = this.respuestasCorrectasSubject.asObservable();
  respuestasIncorrectas$ = this.respuestasIncorrectasSubject.asObservable();
  resultado$ = this.resultadoSubject.asObservable();
  puntajes$ = this.puntajesSubject.asObservable();


  constructor() {
    // Cargar los puntajes desde localStorage al iniciar el servicio
    this.getPuntajes();
  }


  // Método para establecer el valor de cantidad preguntas
  setCantidad(value: number) {
    this.cantidad = value;
  }

  // Método para obtener el valor de cantidad preguntas
  getCantidad(): number {
    return this.cantidad;
  }

  // Método para establecer el valor nivel ingles
  setNivelIdioma(value: string) {
    this.nivel = value;
  }

  // Método para establecer el valor del tiempo
  setTime(value: number) {
    this.tiempo = value;
  }

   // Método para obtener el valor de cantidad preguntas
   getTime(): number {
    return this.tiempo;
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


  // Método para agregar un nuevo puntaje al arreglo max 50 elementos
  addPuntaje(puntaje: number) {
    if (this.puntajes.length >= 50) {
      this.puntajes.shift(); // Elimina el primer elemento si el tamaño es 50 o más
    }
    this.puntajes.push(puntaje);

    // Guardar en localStorage y actualizar el BehaviorSubject
    localStorage.setItem('puntajes', JSON.stringify(this.puntajes));
    this.puntajesSubject.next(this.puntajes); // Emitir el nuevo estado
  }

    // Método para obtener el arreglo de puntajes desde localStorage
    getPuntajes(): void {
      const storedPuntajes = localStorage.getItem('puntajes');
      if (storedPuntajes) {
        this.puntajes = JSON.parse(storedPuntajes);
      }
      this.puntajesSubject.next(this.puntajes); // Emitir el estado inicial
    }


    resetPuntajes() {
      this.puntajes = [];
  
      localStorage.removeItem('puntajes');// Eliminar los datos de puntajes en localStorage
      this.puntajesSubject.next(this.puntajes); // Emitir el estado vacío
    }


}