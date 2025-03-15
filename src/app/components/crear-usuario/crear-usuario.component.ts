import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { crearUsuario } from 'src/app/Models/crearUser';
import { CrearUsuarioService } from 'src/app/services/crear-usuario.service';
import { SharedModule } from 'src/app/Shared/shared.module';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
    imports: [
      CommonModule,
      SharedModule,
      MatTableModule,
      MatIconModule,
      MatCardModule,
      MatTableModule,
      ReactiveFormsModule,
      MatProgressBarModule
    ],
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent {

  title = "Crear Usuario";
  form!: FormGroup;
  loading = false;
  mensaje: string = ''; 

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private crearUsuarioService = inject(CrearUsuarioService);

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.matchPasswordValidator }); // Se usa 'validators' en plural
  }

  matchPasswordValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  crearUsuario() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.mensaje = "No se permiten más registros por ahora.";
      console.log(this.mensaje);
    }, 2000); 
  }
}
