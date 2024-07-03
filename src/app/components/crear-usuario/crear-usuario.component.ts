import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
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

  private fb = inject(FormBuilder)
  private router = inject(Router)
  private crearUsuarioService = inject(CrearUsuarioService)

  ngOnInit() {
    this.initForm();

  }

  initForm() {
    this.form = this.fb.group({
      fechaInicio: [this.today.toISOString().split('T')[0]],
      usuario: [''],
      contrasena: [''],
    })
  }

  crearUsuario() {
    this.loading = true;

    const crearUsuario = {
      name: "andres",
      email: "andres@cl"
    };
    //Ver datos que se envian
    console.log("Enviando datos:", crearUsuario);
    this.crearUsuarioService.postCrearUsuario(crearUsuario).pipe(
      finalize(() => this.loading = false)
    ).subscribe((data: any) => {
      console.log(data);
    });
  }

  obtenerUsuarios() {
    this.crearUsuarioService.getUsuarios().pipe(

    ).subscribe((data: any) => {
      this.dataTable = data
      console.log(data);
    })

  }

}
