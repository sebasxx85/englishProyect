import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { DataLevel1Service } from 'src/app/services/data-level1.service';
import { IntercambioDatosService } from 'src/app/services/intercambio-datos.service';
import { HeaderComponent } from 'src/app/Shared/components/header/header.component';
import { SharedModule } from 'src/app/Shared/shared.module';

@Component({
  selector: 'app-result',
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
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],

})
export class ResultComponent implements OnInit {

  title = "Realizando Prueba";
  loading = false;
  today = new Date();
  cantidadPreguntas = 0;
  cantidadArray: number[] = [];
  nivelIdioma = '';
 
  //Obtener respuestas correctas e incorrectas
  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;
  Puntaje = 0;

  // Inyecciones
  private router = inject(Router);
  private dataLevel1Service = inject(DataLevel1Service);
  private intercambioDatosService = inject(IntercambioDatosService);

  ngOnInit() {
    //this.initForm();
    this.respuestasCorrectas = this.intercambioDatosService.getCantidadRespCorrectas();
    this.respuestasIncorrectas= this.intercambioDatosService.getCantidadRespIncorrectas();
    //falta agregar a la formula el nivel de dificultadd A1(1), A2(1.2), B1(1.4), etc y el tiempo restante
    this.Puntaje = (this.respuestasCorrectas - (this.respuestasIncorrectas)*0.5) * 1 //replazar 1 por tiempo

    console.log(this.respuestasCorrectas)
    console.log(this.respuestasIncorrectas)
  
  }

  //Calcular puntaje tiene que ver con respuestas correctas x el tiempo restante
  //Crear usuarios y puntajes aleatorios con los que competir en el TOP
  //a Los usuarios se le debe ir sumando su puntaje de todas las pruebas en su session

}