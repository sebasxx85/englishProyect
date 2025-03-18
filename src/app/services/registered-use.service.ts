import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisteredUseService {
  
  private apiUrl = 'https://nodejs-english-734228083178.us-central1.run.app/api'; // URL del backend en Node.js
  usuario = signal<string | null>(null); // Solo almacena el nombre de usuario

  constructor(private http: HttpClient, private router: Router) {}



  // login(usuario: string, password: string) {
  //   // Simulación de autenticación (en un caso real, iría una petición HTTP)
  //   if (usuario === 'admin' && password === '1234') { 
  //     this.usuario.set(usuario); // Guarda solo el usuario x seguridad
  //   } else {
  //     console.error('Credenciales incorrectas');
  //   }
  // }


//Backend con NodeJs
login(usuario: string, password: string): Observable<{ message: string, user: any }> {
  return this.http.post<{ message: string, user: any }>(`${this.apiUrl}/login`, { usuario, password }).pipe(
    tap(response => {
      this.usuario.set(response.user.name); // Guarda el usuario si el login es exitoso
    }),
    catchError(error => {
      console.error('Error en el login:', error);
      return throwError(() => new Error('Credenciales incorrectas'));
    })
  );
}

logout(): void {
  this.usuario.set(null);
  this.router.navigate(['/login']);
}
}