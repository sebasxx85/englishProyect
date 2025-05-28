import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IntercambioDatosService } from 'src/app/services/intercambio-datos.service';
import { RegisteredUseService } from 'src/app/services/registered-use.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  title = "Práctica tu Idioma";
  codPrograma = "Ingreso Plataforma";
  // TOKEN = localStorage.getItem('TOKEN') || '';
  // DEFAULT_COD_SUCURSAL = JSON.parse(this.sucursal);
  nombreSucursal = ''

  dataTable = []
  form!: FormGroup
  loading = false
  today = new Date();
  cookiesAccepted: boolean = false;
  login = false;
  mensajeBloqueo: string = '';


  idiomaSelect = [
    { label: 'Ingles', value: 'ING' },
    { label: 'Portugues', value: 'POR' },
    { label: 'Italiano', value: 'ITA' },
  ]

  //Injectando servicios
  private fb = inject(FormBuilder)
  private router = inject(Router)
  private intercambioDatosService = inject(IntercambioDatosService);
  private registeredUseService = inject(RegisteredUseService);


  ngOnInit() {
    this.initForm();

    this.form.get('time')?.valueChanges.subscribe(value => {
      console.log('El valor de time ha cambiado:', value);
    });

    this.form.get('nivel')?.valueChanges.subscribe(value => {
      console.log('El valor del nivel ha cambiado:', value);
    });

    //selecion de idima
    this.form.get('idioma')?.valueChanges.subscribe(value => {
      console.log('El idioma a cambiado:', value);
    });

    // Verificar si el usuario ya aceptó las cookies
    const cookiesStatus = localStorage.getItem('cookiesAccepted');
    this.cookiesAccepted = cookiesStatus === 'true';

    this.login = this.registeredUseService.usuario() !== null;

    this.form.get('nivel')?.valueChanges.subscribe(() => {
      this.mensajeBloqueo = '';
    });
    
    //variable login localStorage
    const usuarioGuardado = localStorage.getItem('usuarioLogueado');
    this.login = usuarioGuardado !== null;

  }

  initForm() {
    this.form = this.fb.group({
      fechaInicio: [this.today.toISOString().split('T')[0]],
      idioma: ['Ingles'],
      nivel: ['principiante'],
      cantidad: [10],
      time: [true]
    })
  }

  calcularTiempo(cantidad: number, time: boolean) {

    console.log('Valores recibidos en calcularTiempo:', { cantidad, time });

    let resultado = 0
    const segundo = 9; //ajustar la cantidad de segundos x pregunta
    resultado = +cantidad * segundo
    time = this.form.get('time')?.value;

    // Convertir el valor de time a una cadena "si" o "no"
    let timeString = time ? true : false;

    if (timeString == true) {
      alert("Tendrás " + resultado + " segundos para realizar el test");
      this.intercambioDatosService.setResultado(resultado);
    } else {
      alert("Tendrás todo el tiempo para realizar el test");
    }

  }

  acceptCookies() {
    // Marcar las cookies como aceptadas
    localStorage.setItem('cookiesAccepted', 'true');
    this.cookiesAccepted = true;
  }

  //Que no sean menos de 3 y mas de 12 preguntas
  validarCantidad() {
    let cantidadControl = this.form.get('cantidad');
    if (cantidadControl) {
      let valor = cantidadControl.value;
      if (valor > 12) {
        cantidadControl.setValue(12);
      } else if (valor = null) {
        cantidadControl.setValue(0);
      } else if (valor < 0) {
        cantidadControl.setValue(3);
      }
    }
  }

  //Mensaje loguearse
  mostrarMensajeBloqueo(event: Event) {
    if (!this.login) {
      event.preventDefault(); // Previene el comportamiento de selección
      this.mensajeBloqueo = '⚠️ Inicia sesión para acceder a los niveles avanzados.';
    } else {
      this.mensajeBloqueo = '';
    }
  }


  empezar() {
    this.loading = true

    setTimeout(() => {
      let time = this.form.get('time')?.value === 'true';
      let cantidadPreguntas = +this.form.get('cantidad')?.value;
      let tiempoDisponible = +this.calcularTiempo(cantidadPreguntas, time);

      // Guardar el valor de cantidad en el servicio
      this.intercambioDatosService.setCantidad(cantidadPreguntas);

      // Guardar el valor de nivel ingles
      let nivelIdioma = this.form.get('nivel')?.value;
      this.intercambioDatosService.setNivelIdioma(nivelIdioma);
      this.intercambioDatosService.setTime(tiempoDisponible);

      // Generar un número aleatorio entre 1 y 3 (o la cantidad de componentes que tengas)
      const randomComponent = Math.floor(Math.random() * 3) + 1;


      // Obtener el idioma seleccionado
      let idiomaSeleccionado = this.form.get('idioma')?.value;

      // Debug en consola
      console.log('Idioma seleccionado:', idiomaSeleccionado);

      // Guardar el idioma seleccionado en el servicio
      this.intercambioDatosService.setIdioma(idiomaSeleccionado);

      // Redirigir siempre a /ejercicio sin exponer el idioma en la URL
      this.router.navigate(['/ejercicios']);
    }, 2000);
  }

  resetAll() {
    this.form.reset
  }



}
