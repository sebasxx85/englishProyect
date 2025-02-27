import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IntercambioDatosService } from 'src/app/services/intercambio-datos.service';
import { Type1Component } from '../EnglishType/type1/type1.component';
import { Type1ItaComponent } from '../ItalianType/type1-ita/type1-ita.component';
import { Type1PorComponent } from '../PortuguesType/type1-por/type1-por.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio',
  standalone: true,
  imports: [CommonModule, Type1Component, Type1ItaComponent, Type1PorComponent ],
  templateUrl: './ejercicio.component.html',
  styleUrl: './ejercicio.component.scss'
})
export class EjercicioComponent implements OnInit {
  idioma: string = '';

  private router = inject(Router);
  private intercambioDatosService = inject(IntercambioDatosService);

  ngOnInit() {
    this.idioma = this.intercambioDatosService.getIdioma(); // Obtener el idioma desde el servicio

    if (!this.idioma) {
      this.router.navigate(['/home']); // Redirigir si no hay idioma seleccionado
    }
  }
}