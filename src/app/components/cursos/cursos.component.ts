import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CursosService } from 'src/app/services/cursos.service';
import { SharedModule } from 'src/app/Shared/shared.module';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, SharedModule, MatCardModule, FormsModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  
  title = "Cursos Premium";
  cursos: any[] = [];
  cursosFiltrados: any[] = [];
  terminoBusqueda: string = '';
  inicio: number = 0; // Índice inicial del carrusel

  private cursosService = inject(CursosService);


  ngOnInit(): void {
    this.cursos = this.cursosService.obtenerCursos();
    this.cursosFiltrados = [...this.cursos];
  }

  filtrarCursos(termino: string) {
    if (termino.trim() === '') {
      this.cursosFiltrados = [...this.cursos];
    } else {
      const terminoNormalizado = this.eliminarAcentos(termino.toLowerCase());
  
      this.cursosFiltrados = this.cursos.filter(curso =>
        this.eliminarAcentos(curso.categoria.toLowerCase()).includes(terminoNormalizado)
      );
    }
    this.inicio = 0; // Reinicia la vista al buscar
  }
  
  // Función para eliminar acentos
  eliminarAcentos(texto: string): string {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  siguiente() {
    const totalCursos = this.cursosFiltrados.length;
    const cantidadAvance = 2; // Avanza de 2 en 2
    const cantidadMostrada = 4; // Siempre mostrar 4 cursos
  
    if (this.inicio + cantidadMostrada + cantidadAvance <= totalCursos) {
      this.inicio += cantidadAvance;
    } else {
      this.inicio = totalCursos - cantidadMostrada; // No permite mostrar menos de 4 cursos
    }
  }
  
  anterior() {
    const cantidadAvance = 2; // Retrocede de 2 en 2
  
    if (this.inicio - cantidadAvance >= 0) {
      this.inicio -= cantidadAvance;
    } else {
      this.inicio = 0; // No retrocede más allá del primer curso
    }
  }
  
  

  eliminarCurso(id: number) {
    this.cursosService.eliminarCurso(id);
    this.cursos = this.cursosService.obtenerCursos();
    this.cursosFiltrados = [...this.cursos];
  }

}