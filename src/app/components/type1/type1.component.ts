import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataLevel1Service } from 'src/app/services/data-level1.service';
import { IntercambioDatosService } from 'src/app/services/intercambio-datos.service';

@Component({
  selector: 'app-type1',
  templateUrl: './type1.component.html',
  styleUrls: ['./type1.component.scss']
})
export class Type1Component implements OnInit {

  title = "Realizando Prueba";
  loading = false;
  form!: FormGroup;
  today = new Date();
  cantidadPreguntas = 0;
  cantidadArray: number[] = [];
  nivelIdioma = '';

  // Arreglos de preguntas y respuestas
  dataTablePreguntas: string[] = [];
  dataTableRespuestas: string[] = [];

  //Obtener respuestas correctas e incorrectas
  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;
  private subscription: Subscription = new Subscription();

  // Inyecciones
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private dataLevel1Service = inject(DataLevel1Service);
  private intercambioDatosService = inject(IntercambioDatosService);

  ngOnInit() {
    this.initForm();
    this.cantidadPreguntas = this.intercambioDatosService.getCantidad();
    this.nivelIdioma = this.intercambioDatosService.getNivelIdioma();
    this.cargarNivelIngles();

    // Crear un array basado en la cantidad de preguntas
    this.cantidadArray = Array.from({ length: this.cantidadPreguntas }, (_, index) => index);

    // Crear dinámicamente los controles de formulario para cada pregunta
    this.cantidadArray.forEach(index => {
      this.form.addControl(`respuesta${index}`, this.fb.control(''));
    });

    //subscribirse al valor de respuestas correctas e incorrectas
    this.subscription.add(
      this.intercambioDatosService.respuestasCorrectas$.subscribe(
        (valor) => this.respuestasCorrectas = valor
      )
    );

    this.subscription.add(
      this.intercambioDatosService.respuestasIncorrectas$.subscribe(
        (valor) => this.respuestasIncorrectas = valor
      )
    );


  }

  initForm() {
    this.form = this.fb.group({
      fechaInicio: [this.today.toISOString().split('T')[0]],
      pregunta: ['Ingles'],
      respuesta: ['Principiante'],
      cantidad: ['1'],
      time: ['true']
    });
  }

  // Función para cargar preguntas aleatorias y sus respuestas correspondientes
  cargarNivelIngles() {
    let preguntas: string[] = [];
    let respuestas: string[] = [];

    // Obtener las preguntas y respuestas según el nivel de idioma
    if (this.nivelIdioma === 'principiante') {
      preguntas = this.dataLevel1Service.getWordsPrincipiantes();
      respuestas = this.dataLevel1Service.getWordsPrincipiantesRes();
    } else if (this.nivelIdioma === 'basico') {
      preguntas = this.dataLevel1Service.getWordsBasico();
      respuestas = this.dataLevel1Service.getWordsBasicoRes();
    } else if (this.nivelIdioma === 'basico-alto') {
      preguntas = this.dataLevel1Service.getWordsBasicoAlto();
      respuestas = this.dataLevel1Service.getWordsBasicoAltoRes();
    } else if (this.nivelIdioma === 'intermedio') {
      preguntas = this.dataLevel1Service.getWordsintermedio();
      respuestas = this.dataLevel1Service.getWordsintermedioRes();
    } else if (this.nivelIdioma === 'intermedio-alto') {
      preguntas = this.dataLevel1Service.getWordsintermedioAlto();
      respuestas = this.dataLevel1Service.getWordsIntermedioAltoRes();
    } else {
      console.log("Nivel no reconocido");
      return;
    }

    // Obtener preguntas aleatorias
    this.dataTablePreguntas = this.getRandomWords(preguntas, this.cantidadPreguntas);

    // Buscar las respuestas correspondientes a las preguntas aleatorias
    this.dataTableRespuestas = this.buscarRespuestas(this.dataTablePreguntas, preguntas, respuestas);
  }

  // Método para obtener palabras aleatorias
  getRandomWords(words: string[], count: number): string[] {
    const shuffled = [...words].sort(() => 0.5 - Math.random()); // Barajar las palabras
    return shuffled.slice(0, count); // Retornar las primeras `count` palabras
  }

  // Método para buscar las respuestas correspondientes a las preguntas aleatorias
  buscarRespuestas(preguntasSeleccionadas: string[], todasLasPreguntas: string[], todasLasRespuestas: string[]): string[] {
    return preguntasSeleccionadas.map(pregunta => {
      const index = todasLasPreguntas.indexOf(pregunta);
      return todasLasRespuestas[index] || ''; 
    });
  }


  enviar() {
    this.loading = true;

    this.respuestasCorrectas = 0;
    this.respuestasIncorrectas = 0;

    // Contar respuestas correctas e incorrectas
    this.cantidadArray.forEach((index) => {
      const respuestaSeleccionada = this.form.get(`respuesta${index}`)?.value;
      const respuestaCorrecta = this.dataTableRespuestas[index];

      if (respuestaSeleccionada === respuestaCorrecta) {
        this.respuestasCorrectas++;
      } else {
        this.respuestasIncorrectas++;
      }
    });

    // Guardar los valores en el servicio IntercambioDatosService
    this.intercambioDatosService.setCantidadRespCorrectas(this.respuestasCorrectas);
    this.intercambioDatosService.setCantidadRespIncorrectas(this.respuestasIncorrectas);

    setTimeout(() => {
      this.router.navigate(['/result']); 
    }, 1000);
  }

  ngOnDestroy() {
    // Cancelar suscripción para evitar fugas de memoria
    this.subscription.unsubscribe();
  }

}
