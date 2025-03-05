import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  title = "Test de Inglés Gratis";
  codPrograma = "Ingreso Plataforma";
  // sucursal = localStorage.getItem('Sucursal') || '';
  // DEFAULT_COD_SUCURSAL = JSON.parse(this.sucursal);
  nombreSucursal = ''

  dataTable = []
  form!: FormGroup
  loading = false
  today = new Date();

  private fb = inject(FormBuilder)
  private router = inject(Router)

  ngOnInit() {
    this.initForm();


  }

  initForm() {
    this.form = this.fb.group({
      fechaInicio: [this.today.toISOString().split('T')[0]],
      usuario: [''],
      password: [''],
    })
  }


  ingresar() {
    this.loading = true
  }

}
