import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { crearUsuario } from '../Models/crearUser';
import { environment } from '../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  MisCursos = [
    { id: 1, categoria: 'Inglés', curso: 'Producto 1', sitio: 'http://example.com/curso1', imagen: 'assets/images/Curso.png', estrellas: 'assets/images/5Estrellas.png' },
    { id: 2, categoria: 'Inglés', curso: 'Producto 2', sitio: 'http://example.com/curso2', imagen: 'assets/images/Curso.png', estrellas: 'assets/images/3Estrellas.png' },
    { id: 3, categoria: 'Portugués', curso: 'Producto 3', sitio: 'http://example.com/curso3', imagen: 'assets/images/CursoPortugues.png', estrellas: 'assets/images/5Estrellas.png' },
    { id: 4, categoria: 'Italiano', curso: 'Producto 4', sitio: 'http://example.com/curso4', imagen: 'assets/images/CursoItalianoBasico.png', estrellas: 'assets/images/1Estrellas.png' },
    { id: 5, categoria: 'Inglés', curso: 'Producto 5', sitio: 'http://example.com/curso1', imagen: 'assets/images/Curso.png', estrellas: 'assets/images/2Estrellas.png' },
    { id: 6, categoria: 'Inglés', curso: 'Producto 6', sitio: 'http://example.com/curso2', imagen: 'assets/images/Curso.png', estrellas: 'assets/images/3Estrellas.png' },
    { id: 7, categoria: 'Portugués', curso: 'Producto 7', sitio: 'http://example.com/curso3', imagen: 'assets/images/CursoPortugues.png', estrellas: 'assets/images/5Estrellas.png' },
    { id: 8, categoria: 'Italiano', curso: 'Producto 8', sitio: 'http://example.com/curso4', imagen: 'assets/images/CursoItalianoIntermedio.png', estrellas: 'assets/images/2Estrellas.png' },
    { id: 9, categoria: 'Portugués', curso: 'Producto 9', sitio: 'http://example.com/curso3', imagen: 'assets/images/CursoPortugues.png', estrellas: 'assets/images/4Estrellas.png' },
    { id: 10, categoria: 'Italiano', curso: 'Producto 10', sitio: 'http://example.com/curso4', imagen: 'assets/images/CursoItalianoAvanzado.png', estrellas: 'assets/images/3Estrellas.png' },
    { id: 11, categoria: 'Italiano', curso: 'Producto 11', sitio: 'http://example.com/curso4', imagen: 'assets/images/Curso.png', estrellas: 'assets/images/1Estrellas.png' },
  ];
  
  //luegi implementar sercicio
  private apiUrl = 'http://localhost:8080/cursos'; // URL del backend

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
