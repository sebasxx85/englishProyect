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
    // Si el usuario ya está logueado, redirigir al dashboard después de 1 segundo
    if (this.registerUser.usuario()) {
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 700);
      return; // Detener la ejecución de más lógica en este componente
    }
  
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
    this.loading = true;
    
    const { usuario, password } = this.form.value;
  
    this.registerUser.login(usuario, password).subscribe({
      next: () => {
        // Redirigir al dashboard si el login es exitoso
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
          this.loading = false;
        }, 2000);
      },
      error: (err) => {
        alert(err.message); // Mensaje de error desde el servicio
        this.loading = false;
      }
    });
  }
  

}
