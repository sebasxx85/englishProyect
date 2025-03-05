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
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      user: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  
  crearUsuario() {
    this.loading = true;

    const crearUsuario = {
      name: "pablo",
      lastname:"gonzalez",
      email: "pablo@cl",
      user: "pablito",
      password: '233@13'
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

  //obtener usario x id
  obtenerUsuarioId(){
    this.crearUsuarioService.getUser(2).subscribe((data: any) => {
      this.dataTable = data
      console.log(data);
    })
  }



}
