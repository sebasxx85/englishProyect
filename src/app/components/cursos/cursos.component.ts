import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/Shared/shared.module';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

  title = "Cursos Premium";
}
