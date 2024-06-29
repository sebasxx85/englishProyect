import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
 
  
  title = "Free English Test";
  codPrograma = "Ingreso Plataforma";
  // sucursal = localStorage.getItem('Sucursal') || '';
  // DEFAULT_COD_SUCURSAL = JSON.parse(this.sucursal);
  nombreSucursal = ''
  
  dataTable = []
  form!: FormGroup
  loading = false
  today = new Date();

  idiomaSelect = [
    { label: 'Ingles', value: 'ING' },
    { label: 'Portugues', value: 'POR' },
  ] 


  constructor(private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();

    // cualquier cambio el formulario se resetea la tabla
    this.form.valueChanges.pipe(


    ).subscribe({
      next: data => {
        this.dataTable = [];
      }
    })

  }

  initForm() {
    this.form = this.fb.group({
      codSucursal: [''],
      fechaInicio: [this.today.toISOString().split('T')[0]],
      idioma: ['Ingles'],
      nivel: ['Principiante'],
      cantidad: ['1'],
    })
  }

  empezar(){
    this.loading = true
  }

  resetAll() {
    this.form.reset
  }

  ngOnDestroy() {
    // this.destroy$.next();
    // this.destroy$.complete();
  }

}
