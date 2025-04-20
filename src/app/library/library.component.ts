import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { ToBeComponent } from './components/verbos/to-be/to-be.component';
import { ToHaveComponent } from './components/verbos/to-have/to-have.component';
import { ToDoComponent } from './components/verbos/to-do/to-do.component';
import { ColoresComponent } from './components/vocabulario/colores/colores.component';
import { DiasComponent } from './components/vocabulario/dias/dias.component';
import { ArticulosComponent } from './components/gramatica/articulos/articulos.component';
import { PronombresComponent } from './components/gramatica/pronombres/pronombres.component';
import { SharedModule } from '../Shared/shared.module';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    ToBeComponent,
    ToHaveComponent,
    ToDoComponent,
    ColoresComponent,
    DiasComponent,
    ArticulosComponent,
    PronombresComponent,
    SharedModule
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {
  selectedTopic = '';
  title = "Biblioteca del Inglés";

  selectTopic(topic: string): void {
    this.selectedTopic = topic;
  }
}
