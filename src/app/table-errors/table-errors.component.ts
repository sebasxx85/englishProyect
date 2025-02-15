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
import { DataLevel1Service } from '../services/data-level1.service';
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
export class TableErrorsComponent implements OnInit{

  title = "Errores Cometidos";
  loading = false;
  cantidadArray: number[] = [];
  nivelIdioma = '';
  nivelIdiomaPuntaje = 1.0;


  //Obtener respuestas correctas e incorrectas
  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;
  Puntaje = 0;

  //errores
  errors = [];

  // Inyecciones
  private router = inject(Router);
  private dataLevel1Service = inject(DataLevel1Service);
  private intercambioDatosService = inject(IntercambioDatosService);

  displayedColumns: string[] = ['numero', 'error', 'correccion'];
  errores: { numero: number, error: string, correccion: string }[] = [];

  ngOnInit() {
    this.respuestasIncorrectas = this.intercambioDatosService.getCantidadRespIncorrectas();
    console.log(this.respuestasIncorrectas);
    
    // Generar filas dinámicamente
    this.errores = Array.from({ length: this.respuestasIncorrectas }, (_, i) => ({
      numero: i + 1, // Número de la fila (1, 2, 3, ...)
      error: '', // Inicialmente vacío
      correccion: '' // Inicialmente vacío
    }));
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
