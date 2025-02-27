import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { ShufflePipe2 } from 'src/app/pipes/shuffle2.pipe';
import { DataEnglish1Service } from 'src/app/services/data-english1.service';
import { IntercambioDatosService } from 'src/app/services/intercambio-datos.service';
import { SharedModule } from 'src/app/Shared/shared.module';

@Component({
  selector: 'app-type3',
  standalone: true,
  imports: [CommonModule, MatCardModule, ReactiveFormsModule, SharedModule, MatProgressBarModule],
  templateUrl: './type3.component.html',
  styleUrls: ['./type3.component.scss']
})
export class Type3Component {


  title = "Realizando Prueba";

  loading = false
  form!: FormGroup
  today = new Date();
  dataTablePreguntas: string[] = [];
  cantidadPreguntas = 0;

  //Injeciones
  private fb = inject(FormBuilder)
  private router = inject(Router)
  private dataLevel1Service = inject(DataEnglish1Service);
  private intercambioDatosService = inject(IntercambioDatosService);

  ngOnInit() {
    this.initForm();
    this.cantidadPreguntas = this.intercambioDatosService.getCantidad();

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


  enviar() {
    this.loading = true
  }

}
