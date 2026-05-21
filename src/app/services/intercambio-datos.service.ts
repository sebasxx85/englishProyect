import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntercambioDatosService {

  private platformId = inject(PLATFORM_ID);

  private cantidad: number = 0;
  private nivel: string = '';
  private tiempo: number = 0;
  private resultadoSubject = new BehaviorSubject<number>(0);
  // Arreglo para almacenar los últimos puntajes
  private puntajes: number[] = [];

  private idiomaSeleccionado: string = '';


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

  // Nuevo BehaviorSubject para almacenar las respuestas incorrectas y la coorectas a esas incorrectas
  private respuestasIncorrectasArraySubject = new BehaviorSubject<{ pregunta: string, respuestaUsuario: string, respuestaCorrecta: string }[]>([]);

  // Observable para las respuestas incorrectas
  respuestasIncorrectasArray$ = this.respuestasIncorrectasArraySubject.asObservable();


  constructor() {
    // Cargar los puntajes desde localStorage al iniciar el servicio
    // SOLO ejecutar en browser
    if (isPlatformBrowser(this.platformId)) {
      this.getPuntajes();
    }
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

  setIdioma(idioma: string) {
    this.idiomaSeleccionado = idioma;
  }

  getIdioma(): string {
    return this.idiomaSeleccionado;
  }

  // Método para establecer las respuestas incorrectas y las correctas
  setRespuestasIncorrectasArray(value: { pregunta: string, respuestaUsuario: string, respuestaCorrecta: string }[]) {
    console.log("📌 Respuestas incorrectas guardadas:", value);
    this.respuestasIncorrectasArraySubject.next(value);
  }


  // Método para obtener las respuestas incorrectas actuales
  getRespuestasIncorrectasArray(): { pregunta: string, respuestaUsuario: string, respuestaCorrecta: string }[] {
    return this.respuestasIncorrectasArraySubject.getValue();
  }


  // Método para agregar un nuevo puntaje al arreglo max 50 elementos
  addPuntaje(puntaje: number) {
    if (this.puntajes.length >= 50) {
      this.puntajes.shift(); // Elimina el primer elemento si el tamaño es 50 o más
    }
    this.puntajes.push(puntaje);

    // Guardar en localStorage y actualizar el BehaviorSubject
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('puntajes', JSON.stringify(this.puntajes));
    }
    this.puntajesSubject.next(this.puntajes); // Emitir el nuevo estado
  }

  // Método para obtener el arreglo de puntajes desde localStorage
  getPuntajes(): void {

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const storedPuntajes = localStorage.getItem('puntajes');

    if (storedPuntajes) {
      this.puntajes = JSON.parse(storedPuntajes);
    }

    this.puntajesSubject.next(this.puntajes);

  }


  resetPuntajes() {
    this.puntajes = [];
    // Eliminar los datos de puntajes en localStorage
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('puntajes');
    }
    this.puntajesSubject.next(this.puntajes); // Emitir el estado vacío
  }


}