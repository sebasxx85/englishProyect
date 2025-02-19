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
import { Subscription } from 'rxjs';
import { DataEnglish1Service } from 'src/app/services/data-english1.service';
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
  nivelIdiomaPuntaje = 1.0;

  ultimosPuntajes: number[] = [];
  private subscription = new Subscription();

  //Obtener respuestas correctas e incorrectas
  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;
  Puntaje = 0;

  // Inyecciones
  private router = inject(Router);
  private dataLevel1Service = inject(DataEnglish1Service);
  private intercambioDatosService = inject(IntercambioDatosService);

  ngOnInit() {
    //this.initForm();
    this.nivelIdioma = this.intercambioDatosService.getNivelIdioma()
    this.puntajeNivel(this.nivelIdioma);
    this.respuestasCorrectas = this.intercambioDatosService.getCantidadRespCorrectas();
    this.respuestasIncorrectas = this.intercambioDatosService.getCantidadRespIncorrectas();

    //Formula puntaje, replazar 1 por tiempo
    this.Puntaje = parseFloat(
      ((this.respuestasCorrectas - (this.respuestasIncorrectas * 0.5)) *
        this.nivelIdiomaPuntaje * 1985 * 1).toFixed(2)
    );

    //Subscripcion arreglo ultimos puntajes
    this.subscription.add(
      this.intercambioDatosService.puntajes$.subscribe(puntajes => {
        this.ultimosPuntajes = [...puntajes].reverse(); // Mostrar el último puntaje primero
        console.log("Puntajes actualizados:", this.ultimosPuntajes);
      })
    );


    // Agregar el puntaje al arreglo puntajes
    this.intercambioDatosService.addPuntaje(this.Puntaje);

  }


  puntajeNivel(nivel: string) {
    console.log("El nivel es:", nivel);

    switch (nivel) {
      case 'principiante':
        this.nivelIdiomaPuntaje = 1.0;
        break;
      case 'basico':
        this.nivelIdiomaPuntaje = 1.2;
        break;
      case 'basico-alto':
        this.nivelIdiomaPuntaje = 1.4;
        break;
      case 'intermedio':
        this.nivelIdiomaPuntaje = 1.6;
        break;
      case 'intermedio-alto':
        this.nivelIdiomaPuntaje = 2.0;
        break;
      default:
        this.nivelIdiomaPuntaje = 1.0; // Valor por defecto si no coincide con ningún nivel
        break;
    }

    console.log("Multiplicador de nivel:", this.nivelIdiomaPuntaje);
  }

  //Resetear PUNTAJES
  reset() {
    const confirmar = window.confirm("¿Estás seguro de borrar todos tus puntajes actuales?");
    
    if (confirmar) {
      this.intercambioDatosService.resetPuntajes();
      console.log("Puntajes eliminados");
    } else {
      console.log("Acción cancelada");
    }
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

  ngOnDestroy() {
    // Limpiar las suscripciones al destruir el componente
    this.subscription.unsubscribe();
  }

}

//Crear usuarios y puntajes aleatorios con los que competir en el TOP
//a Los usuarios se le debe ir sumando su puntaje de todas las pruebas en su session

