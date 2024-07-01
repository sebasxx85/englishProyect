import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DataLevel1Service } from 'src/app/services/data-level1.service';
import { SharedModule } from "../../Shared/shared.module";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-select-level',
    standalone: true,
    templateUrl: './select-level.component.html',
    styleUrls: ['./select-level.component.scss'],
    imports: [CommonModule, RouterModule,
        //Angular Material
        MatIconModule,
        MatCardModule,
        MatTableModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSelectModule,
        MatNativeDateModule, SharedModule, ReactiveFormsModule]
})
export class SelectLevelComponent {
  private dataLevel1 = inject(DataLevel1Service);

  title = 'Realizando Test'


  dataTable = []
  form!: FormGroup
  loading = false
  today = new Date();

  constructor(private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();


  }

  initForm() {
    this.form = this.fb.group({
      fechaInicio: [this.today.toISOString().split('T')[0]],
      idioma: ['Ingles'],
      nivel: ['Principiante'],
      cantidad: ['1'],
      time: ['true']
    })
  }

  verResultado(){
    
  }

}
