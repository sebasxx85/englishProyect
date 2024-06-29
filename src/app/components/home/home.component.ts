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

    this.form.get('time')?.valueChanges.subscribe(value => {
      if (value == true) {
        console.log('El valor de time es positivo', value);
        //this.calcularTiempo(value)
      } else if(value == false) {
        console.log('El valor de time es negativo');
  
      }
    });


  }

  initForm() {
    this.form = this.fb.group({
      codSucursal: [''],
      fechaInicio: [this.today.toISOString().split('T')[0]],
      idioma: ['Ingles'],
      nivel: ['Principiante'],
      cantidad: ['1'],
      time: ['true']
    })
  }

  calcularTiempo(time: boolean, cantidad: number){

      //let cantidadPreguntas = 5 //this.form.get('cantidad') || 0
      let resultado = 0
      const segundo = 30;

      resultado = +cantidad * segundo
      alert("tendras" + resultado + "para realizar el test")
    
    
  }

  empezar(){
    this.loading = true
    let time = this.form.get('time')?.value;
    let cantidad = this.form.get('cantidad')?.value;
    this.calcularTiempo(time, cantidad)
    
  }

  resetAll() {
    this.form.reset
  }

  ngOnDestroy() {
    // this.destroy$.next();
    // this.destroy$.complete();
  }

}
