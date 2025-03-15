import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { crearUsuario } from 'src/app/Models/crearUser';
import { CrearUsuarioService } from 'src/app/services/crear-usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent {

  title = "Crear Usuario";

  dataTable = []
  form!: FormGroup
  loading = false
  today = new Date();

  errorMessage: String=""
  crearUsario?: crearUsuario 

  private fb = inject(FormBuilder)
  private router = inject(Router)
  private crearUsuarioService = inject(CrearUsuarioService)

  ngOnInit() {
    this.initForm();

  }

  initForm() {
    this.form = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  
  mensaje: string = ''; // Variable para mostrar mensaje en la UI

  crearUsuario() {
  
    this.loading = true;
  
    // Simular respuesta sin hacer petición HTTP
    setTimeout(() => {
      this.loading = false;
      this.mensaje = "No se permiten más registros por ahora.";
      console.log(this.mensaje);
    }, 2000); // Simulación de carga (1 segundo)
  }
  
  


}
