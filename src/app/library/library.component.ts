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
import { SinonimosComponent } from './components/avanzado/sinonimos/sinonimos.component';
import { AntonimosComponent } from './components/avanzado/antonimos/antonimos.component';
import { ToGetComponent } from './components/verbos/to-get/to-get.component';
import { ToMakeComponent } from './components/verbos/to-make/to-make.component';
import { ToGoComponent } from './components/verbos/to-go/to-go.component';
import { AnimalesComponent } from './components/vocabulario/animales/animales.component';
import { FrutasComponent } from './components/vocabulario/frutas/frutas.component';
import { MesesComponent } from './components/vocabulario/meses/meses.component';
import { RopaComponent } from './components/vocabulario/ropa/ropa.component';
import { PresenteSimpleComponent } from './components/gramatica/presente-simple/presente-simple.component';
import { PreposicionesComponent } from './components/gramatica/preposiciones/preposiciones.component';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
  
    // Verbos
    ToBeComponent,
    ToHaveComponent,
    ToDoComponent,
    ToGetComponent,
    ToMakeComponent,
    ToGoComponent,
  
    // Vocabulario
    AnimalesComponent,
    ColoresComponent,
    DiasComponent,
    FrutasComponent,
    MesesComponent,
    RopaComponent,
  
    // Gramática
    ArticulosComponent,
    PronombresComponent,
    PresenteSimpleComponent,
    PreposicionesComponent,
  
    // Avanzado
    SinonimosComponent,
    AntonimosComponent,
  
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
