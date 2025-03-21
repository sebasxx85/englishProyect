import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisteredUseService {
  
  private apiUrl = `${environment.apiUrl}`;
  usuario = signal<string | null>(null); // Solo almacena el nombre de usuario

  constructor(private http: HttpClient, private router: Router) {}


//Backend con NodeJs
login(usuario: string, password: string): Observable<{ message: string, user: any }> {
  return this.http.post<{ message: string, user: any }>(`${this.apiUrl}login`, { usuario, password }).pipe(
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