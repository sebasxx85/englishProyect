import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { IntercambioDatosService } from '../services/intercambio-datos.service';

@Component({
  selector: 'app-table-errors',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule,   //nota se trae SharedModule para usar header y foot que no son standalone
    //Angular Material
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule],
  templateUrl: './table-errors.component.html',
  styleUrl: './table-errors.component.scss'
})
export class TableErrorsComponent implements OnInit {

  title = "Errores Cometidos";
  loading = false;
  cantidadArray: number[] = [];
  nivelIdiomaPuntaje = 1.0;
  buttonPositionClass = 'button-container'; // Clase por defecto boton
  tableClass = 'table-container'; // Clase por defecto para la tabla

  //Obtener respuestas correctas e incorrectas
  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;
  Puntaje = 0;

  // Inyecciones
  private router = inject(Router);
  private intercambioDatosService = inject(IntercambioDatosService);

  //Para el mat-table
  displayedColumns: string[] = ['numero', 'pregunta', 'error', 'correccion'];
  errores: { numero: number, pregunta: string, error: string, correccion: string }[] = [];



  ngOnInit() {
    setTimeout(() => {
      this.respuestasIncorrectas = this.intercambioDatosService.getCantidadRespIncorrectas();
      console.log("Respuestas Incorrectas:", this.respuestasIncorrectas);
      //Obtener cuales fueron las incorrectas no la cantidad de incorrectas
      this.respuestasIncorrectas = this.intercambioDatosService.getCantidadRespIncorrectas();

      // Generar filas dinámicamente
      // Obtener las respuestas incorrectas
      this.errores = this.intercambioDatosService.getRespuestasIncorrectasArray().map((error, index) => ({
        numero: index + 1,
        pregunta: error.pregunta,
        error: error.respuestaUsuario,
        correccion: error.respuestaCorrecta
        }));

      // Definir la clase para el botón después de actualizar `errores`
      this.buttonPositionClass = this.errores.length >= 4 ? 'button-container-relative' : 'button-container';

      // Definir la clase de la tabla si hay 5 o más errores
      this.tableClass = this.errores.length >= 5 ? 'table-container-scroll' : 'table-container';

      console.log("Clase asignada:", this.buttonPositionClass); // Depuración

    }, 100);  // Pequeña espera para asegurar que el valor esté disponible
  }



  volver() {
    this.loading = true;
    this.intercambioDatosService.setResultado(0);
    this.intercambioDatosService.setCantidad(4);
    this.intercambioDatosService.setTime(0);
    this.intercambioDatosService.setNivelIdioma('principiante')
    this.intercambioDatosService.setCantidadRespCorrectas(0)
    this.intercambioDatosService.setCantidadRespIncorrectas(0)

    setTimeout(() => {
      this.router.navigate(['']);
    }, 1000);

  }

}
