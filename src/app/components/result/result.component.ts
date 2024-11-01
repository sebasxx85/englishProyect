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
  form!: FormGroup;
  today = new Date();
  cantidadPreguntas = 0;
  cantidadArray: number[] = [];
  nivelIdioma = '';

  //Obtener respuestas correctas e incorrectas
  respuestasCorrectas = 0;
  respuestasIncorrectas = 0;

  // Inyecciones
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private dataLevel1Service = inject(DataLevel1Service);
  private intercambioDatosService = inject(IntercambioDatosService);

  ngOnInit() {
    //this.initForm();
    this.respuestasCorrectas = this.intercambioDatosService.getCantidadRespCorrectas();
    this.respuestasIncorrectas= this.intercambioDatosService.getCantidadRespIncorrectas();
  
  }


}