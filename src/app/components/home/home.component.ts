import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IntercambioDatosService } from 'src/app/services/intercambio-datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


  title = "Test de Inglés Gratis";
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

  //Injectando servicios
  private fb = inject(FormBuilder)
  private router = inject(Router)
  private intercambioDatosService = inject(IntercambioDatosService);
  

  ngOnInit() {
    this.initForm();

    this.form.get('time')?.valueChanges.subscribe(value => {
      console.log('El valor de time ha cambiado:', value);
    });

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

  calcularTiempo(cantidad: number, time: boolean) {

    console.log('Valores recibidos en calcularTiempo:', { cantidad, time });

    let resultado = 0
    const segundo = 30;
    resultado = +cantidad * segundo

    // Convertir el valor de time a una cadena "si" o "no"
    let timeString = time ? 'si' : 'no';

    if (timeString == 'si') {
      alert("Tendrás " + resultado + " segundos para realizar el test");
    } else {
      alert("Tendrás todo el tiempo para realizar el test");
    }

  }

  empezar() {
    this.loading = true

    setTimeout(() => {
      let time = this.form.get('time')?.value === 'true';
      let cantidad = +this.form.get('cantidad')?.value;
      this.calcularTiempo(cantidad, time);

      // Guardar el valor de cantidad en el servicio
      this.intercambioDatosService.setCantidad(cantidad);

      // Generar un número aleatorio entre 1 y 3 (o la cantidad de componentes que tengas)
      const randomComponent = Math.floor(Math.random() * 3) + 1;
     // this.router.navigate([`type${randomComponent}`]);
     this.router.navigate([`type${1}`]);
    }, 2000);

  }

  resetAll() {
    this.form.reset
  }

  ngOnDestroy() {
    // this.destroy$.next();
    // this.destroy$.complete();
  }

}
