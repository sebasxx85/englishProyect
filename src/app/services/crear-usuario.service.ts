import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { crearUsuario } from '../Models/crearUser';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {

  constructor( private http: HttpClient) { }

  postCrearUsuario(body: crearUsuario) {
    //api creada con java
    return this.http.post(environment.apiUrl, body).pipe(
      catchError(error => {
        console.error('Se produjo un error:', error);
        return throwError(error);
      })
    );
  }

  getUsuarios() {
    //api creada con java
    return this.http.get(environment.apiUrl).pipe(
      catchError(error => {
        console.error('Se produjo un error:', error);
        return throwError(error);
      })
    );
  }


  getUser(id:number):Observable<crearUsuario>{
    return this.http.get<crearUsuario>(environment.apiUrl+"/"+id).pipe(
      catchError(error => {
        console.error('Se produjo un error:', error);
        return throwError(error);
      })
    );
  }
  

  
}
