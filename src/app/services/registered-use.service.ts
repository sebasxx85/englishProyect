import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisteredUseService {
  
  private apiUrl = 'http://localhost:3000/api'; // URL del backend en Node.js
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

  // logout() {
  //   this.usuario.set(null);
  // }

//Node

login(usuario: string, password: string): void {
  this.http.post<{ message: string, user: any }>(`${this.apiUrl}/login`, { usuario, password })
    .subscribe({
      next: (response) => {
        this.usuario.set(response.user.name);
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        alert('Credenciales incorrectas');
      }
    });
}

logout(): void {
  this.usuario.set(null);
  this.router.navigate(['/login']);
}
}