import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
 
  
  title = "My Practice Test";
  codPrograma = "Ingreso Plataforma";
  // sucursal = localStorage.getItem('Sucursal') || '';
  // DEFAULT_COD_SUCURSAL = JSON.parse(this.sucursal);
  nombreSucursal = ''
  
  dataTable = []
  form!: FormGroup
  loading = false
  today = new Date();

  estadoProceso = [
    { label: 'Recepcionado', value: 'REC' },
    { label: 'Finalizado', value: 'FIN' },
    { label: 'En Proceso', value: 'EPR' },
    { label: 'Anulado', value: 'ANU' },
  ] 

  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

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
      idAmbulatorio: [''],
      fechaInicio: [this.today.toISOString().split('T')[0]],
      codUnidadEnvio: [''],
      especialidad: [''],
      codTipoBiopsia: [''],
      codDeriva: [''],
    })
  }

  empezar(){
    this.loading = true
  }

  resetAll() {
    this.form.reset
    this.dataTable = [];
  }

  ngOnDestroy() {
    // this.destroy$.next();
    // this.destroy$.complete();
  }

}
