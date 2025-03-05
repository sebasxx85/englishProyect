import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisteredUseService } from 'src/app/services/registered-use.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-user',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

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
  private registerUser = inject(RegisteredUseService)

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

  //Usando signal para el Login
  login() {
    this.loading = true
    
    const { usuario, password } = this.form.value;
    this.registerUser.login(usuario, password);
  
    // Redirigir al dashboard si el login es exitoso
    if (this.registerUser.usuario()) {
      setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 2000);

    } else {
      alert('Credenciales incorrectas');
    }
  }
  

}
