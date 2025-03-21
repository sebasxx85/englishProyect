import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { crearUsuario } from '../Models/crearUser';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  MisCursos = [
    { id: 1, categoria: 'Inglés', curso: 'Aprende Inglés con cuentos cortos', sitio: 'https://go.hotmart.com/H98743635J', imagen: 'assets/images/CursoIngles.png', estrellas: 'assets/images/5Estrellas.png' },
    { id: 2, categoria: 'Inglés', curso: 'Inglés 360° - Aprende Inglés desde cero', sitio: 'https://go.hotmart.com/M98743870O', imagen: 'assets/images/CursoIngles2.png', estrellas: 'assets/images/4Estrellas.png' },
    { id: 3, categoria: 'Portugués', curso: 'Portugués de Negocios para Hispanos', sitio: 'https://go.hotmart.com/O98743990R', imagen: 'assets/images/CursoPortugues.png', estrellas: 'assets/images/4Estrellas.png' },
    { id: 4, categoria: 'Otros', curso: 'Aprende Idiomas & Haz Amigos', sitio: 'https://go.hotmart.com/Q98744107N', imagen: 'assets/images/OtrosCursos.png', estrellas: 'assets/images/4Estrellas.png' },
    { id: 5, categoria: 'Italiano', curso: 'Curso de Italiano para principiantes', sitio: 'https://go.hotmart.com/K98744887S', imagen: 'assets/images/CursoItaliano2.png', estrellas: 'assets/images/4Estrellas.png' },
    { id: 6, categoria: 'Inglés', curso: 'Aprende Inglés mientras duermes', sitio: 'https://go.hotmart.com/I98744241U', imagen: 'assets/images/CursoIngles3.png', estrellas: 'assets/images/4Estrellas.png' },
    { id: 7, categoria: 'Italiano', curso: 'Curso de Italiano de cero a Nativo', sitio: 'https://go.hotmart.com/X98744354H', imagen: 'assets/images/CursoItaliano.png', estrellas: 'assets/images/5Estrellas.png' },
    { id: 8, categoria: 'Inglés', curso: 'Curso para aprender Inglés en 90 días', sitio: 'https://go.hotmart.com/C98744731Q?dp=1', imagen: 'assets/images/CursoIngles4.png', estrellas: 'assets/images/5Estrellas.png' },
    { id: 9, categoria: 'Inglés', curso: 'Aprende Inglés con cuentos cortos', sitio: 'https://go.hotmart.com/H98743635J', imagen: 'assets/images/CursoIngles.png', estrellas: 'assets/images/5Estrellas.png' },
    { id: 10, categoria: 'Italiano', curso: 'Curso de Italiano Básico para Hispanos', sitio: 'https://go.hotmart.com/D98745032X', imagen: 'assets/images/CursoItalianoBasico.png', estrellas: 'assets/images/4Estrellas.png' },
    { id: 11, categoria: 'Italiano', curso: 'Curso de Italiano Intermedio para Hispanos', sitio: 'https://go.hotmart.com/F98745050R', imagen: 'assets/images/CursoItalianoIntermedio.png', estrellas: 'assets/images/5Estrellas.png' },
    { id: 12, categoria: 'Italiano', curso: 'Curso de Italiano Avanzado para Hispanos', sitio: 'https://go.hotmart.com/L98745063K', imagen: 'assets/images/CursoItalianoAvanzado.png', estrellas: 'assets/images/5Estrellas.png' },
  ];
  
  //luegi implementar sercicio
 // private apiUrl = 'http://localhost:8080/cursos'; // URL del backend
  private apiUrl = environment.apiUrl

  private http = inject(HttpClient);

  // obtenerCursos(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }

  //API crear usaurio
   postCrearUsuario(body: crearUsuario) {
      //api creada con java
      return this.http.post(environment.apiUrl, body).pipe(
        catchError(error => {
          console.error('Se produjo un error:', error);
          return throwError(error);
        })
      );
    }


  obtenerCursos() {
    // con ... Retorna una copia del array para evitar modificaciones externas
    return [...this.MisCursos];
  }

  agregarCurso(curso: any) {
    //Comprobar si existe
    const existe = this.MisCursos.some(c => c.id === curso.id);

    if (!existe) {
      this.MisCursos.push(curso);
    } else {
      console.log(`El curso con id ${curso.id} ya existe.`);
    }
  }

  eliminarCurso(id: number) {
    //Comprobar si existe
    const index = this.MisCursos.findIndex(curso =>
      curso.id === id
    );

    if (index !== -1) {
      this.MisCursos.splice(index, 1);
    }
  }

  encontrarCursosByCategory(categoria: string): any[] {
    return this.MisCursos.filter(curso =>
      curso.categoria === categoria);
  }


  editarCurso(id: number, nuevaData: any) {
    const index = this.MisCursos.findIndex(curso => curso.id === id);

    if (index !== -1) {
      this.MisCursos[index] = { ...this.MisCursos[index], ...nuevaData };
    } else {
      console.log(`No se encontró el curso con id ${id}`);
    }
  }



}
