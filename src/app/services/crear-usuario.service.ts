import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { crearUsuario } from '../Models/crearUser';

@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {

  constructor( private http: HttpClient) { }

  postCrearUsuario(body: crearUsuario) {
    //api creada con java
    return this.http.post('localhost:8080/api/users', body).pipe(
      catchError(error => {
        console.error('Se produjo un error:', error);
        return throwError(error);
      })
    );
  }



  
}
