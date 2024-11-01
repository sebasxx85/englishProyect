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

  loading = false;
  form!: FormGroup;
  today = new Date();
  cantidadPreguntas = 0;
  cantidadArray: number[] = []; // Arreglo para generar los selectores dinámicos
  respuestasCorrectas = 0; //luego ver cuantas preg y resp hacen match y motstrar tabla en resultComponent
  nivelIdioma = '';
  //Areglos preguntas y respuestas
  dataTablePreguntas: string[] = [];
  dataTableRespuestas: string[] = [];


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
  }

  initForm() {
    this.form = this.fb.group({
      fechaInicio: [this.today.toISOString().split('T')[0]],
      pregunta: ['ingles'],
      respuesta: ['principiante'],
      cantidad: ['1'],
      time: ['true']
    });
  }

  
  // Función para obtener palabras aleatorias
  getRandomWords(words: string[], count: number): string[] {
    const shuffled = words.sort(() => 0.5 - Math.random()); // Barajar las palabras
    return shuffled.slice(0, count); // Retornar las primeras `count` palabras
  }

  //funcion para cargar dependiendo del nivel
  cargarNivelIngles() {
    let palabras: string[] = [];
    let palabras2: string[] = []; //Respuestas

    if (this.nivelIdioma === 'principiante') {
      palabras = this.dataLevel1Service.getWordsPrincipiantes();
      palabras2 = this.dataLevel1Service.getWordsPrincipiantesRes();
    } else if (this.nivelIdioma === 'basico') {
      palabras = this.dataLevel1Service.getWordsBasico();
      palabras2 = this.dataLevel1Service.getWordsBasicoRes();
    } else if (this.nivelIdioma === 'basico-alto') {
      palabras = this.dataLevel1Service.getWordsBasicoAlto();
      palabras2 = this.dataLevel1Service.getWordsBasicoAltoRes();
    } else if (this.nivelIdioma === 'intermedio') {
      palabras = this.dataLevel1Service.getWordsintermedio();
      palabras2 = this.dataLevel1Service.getWordsintermedioRes();
    } else if (this.nivelIdioma === 'intermedio-alto') {
      palabras = this.dataLevel1Service.getWordsintermedioAlto();
      palabras = this.dataLevel1Service.getWordsIntermedioAltoRes();
    } else {
      console.log("Nivel no reconocido");
      return; 
    }

    // Aplicar aleatoriedad a las palabras obtenidas según el nivel
    this.dataTablePreguntas = this.getRandomWords(palabras, this.cantidadPreguntas);
    this.dataTableRespuestas = this.getRandomWords(palabras2, this.cantidadPreguntas);
  }


  enviar() {
    this.loading = true;

    // Simula alguna lógica adicional (por ejemplo, mostrar un loader)
    setTimeout(() => {
      this.router.navigate(['/result']); // Navegar hacia ResultComponent
    }, 1000);
  }

}
