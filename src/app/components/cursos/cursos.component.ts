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
    const cantidad = window.innerWidth < 400 ? 1 : 4; // Si es menor a 400px, mostrar 1 curso
    if (this.inicio + cantidad < this.cursosFiltrados.length) {
      this.inicio += cantidad;
    }
  }
  
  anterior() {
    const cantidad = window.innerWidth < 400 ? 1 : 4; // Si es menor a 400px, retroceder 1 curso
    if (this.inicio - cantidad >= 0) {
      this.inicio -= cantidad;
    }
  }
  

  eliminarCurso(id: number) {
    this.cursosService.eliminarCurso(id);
    this.cursos = this.cursosService.obtenerCursos();
    this.cursosFiltrados = [...this.cursos];
  }


}