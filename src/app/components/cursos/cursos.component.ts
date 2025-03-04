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
      this.cursosFiltrados = this.cursos.filter(curso =>
        curso.categoria.toLowerCase().includes(termino.toLowerCase())
      );
    }
    this.inicio = 0; // Reinicia la vista al buscar
  }

  siguiente() {
    if (this.inicio + 4 < this.cursosFiltrados.length) {
      this.inicio += 4;
    }
  }

  anterior() {
    if (this.inicio - 4 >= 0) {
      this.inicio -= 4;
    }
  }

  eliminarCurso(id: number) {
    this.cursosService.eliminarCurso(id);
    this.cursos = this.cursosService.obtenerCursos();
    this.cursosFiltrados = [...this.cursos];
  }


}