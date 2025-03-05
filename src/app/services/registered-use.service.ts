import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisteredUseService {

  usuario = signal<string | null>(null); // Solo almacena el nombre de usuario

  login(usuario: string, password: string) {
    // Simulación de autenticación (en un caso real, iría una petición HTTP)
    if (usuario === 'admin' && password === '1234') { 
      this.usuario.set(usuario); // Guarda solo el usuario x seguridad
    } else {
      console.error('Credenciales incorrectas');
    }
  }

  logout() {
    this.usuario.set(null);
  }

}