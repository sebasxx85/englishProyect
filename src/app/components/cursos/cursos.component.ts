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
  }

  eliminarCurso(id: number) {
    this.cursosService.eliminarCurso(id);
    this.cursos = this.cursosService.obtenerCursos();
    this.cursosFiltrados = [...this.cursos];
  }


}