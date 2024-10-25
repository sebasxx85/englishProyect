import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataLevel1Service } from 'src/app/services/data-level1.service';
import { IntercambioDatosService } from 'src/app/services/intercambio-datos.service';

@Component({
  selector: 'app-type1',
  templateUrl: './type1.component.html',
  styleUrls: ['./type1.component.scss']
})
export class Type1Component {

  title = "Realizando Prueba";

  loading = false
  form!: FormGroup
  today = new Date();
  dataTablePreguntas: string[] = [];
  cantidadPreguntas = 0;

  //Injeciones
  private fb = inject(FormBuilder)
  private router = inject(Router)
  private dataLevel1Service = inject(DataLevel1Service);
  private intercambioDatosService = inject(IntercambioDatosService);

  ngOnInit() {
    this.initForm();
    this.cantidadPreguntas = this.intercambioDatosService.getCantidad();
    this.loadRandomWords(this.cantidadPreguntas);

  }

  initForm() {
    this.form = this.fb.group({
      fechaInicio: [this.today.toISOString().split('T')[0]],
      pregunta: ['Ingles'],
      respuesta: ['Principiante'],
      cantidad: ['1'],
      time: ['true']
    })
  }

  // Cargar 10 palabras aleatorias del servicio
  loadRandomWords(cantidad: number) {
    const allWords = this.dataLevel1Service.getWords();
    this.dataTablePreguntas = this.getRandomWords(allWords, cantidad);
  }

  // Función para obtener 10 palabras aleatorias
  getRandomWords(words: string[], count: number): string[] {
    const shuffled = words.sort(() => 0.5 - Math.random()); // Barajar las palabras
    return shuffled.slice(0, count); // Retornar las primeras `count` palabras
  }

  enviar() {
    this.loading = true
  }

}
