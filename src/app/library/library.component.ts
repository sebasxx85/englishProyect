import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { filter } from 'rxjs/operators';
import { SharedModule } from '../Shared/shared.module';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    SharedModule
  ],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {
  title = 'Biblioteca';

  private router = inject(Router);
  private titleMap: Array<[RegExp, string]> = [
    [/^\/?library\/?$/, 'Biblioteca'],
    [/vocabulario\/animales/, 'Vocabulario · Animales'],
    [/vocabulario\/colores/, 'Vocabulario · Colores'],
     [/vocabulario\/compras/, 'Vocabulario · Compras'],
    [/vocabulario\/cuerpo/, 'Vocabulario · Partes del cuerpo'],
    [/vocabulario\/dias/, 'Vocabulario · Días'],
    [/vocabulario\/frutas/, 'Vocabulario · Frutas'],
    [/vocabulario\/meses/, 'Vocabulario · Meses'],
    [/vocabulario\/ropa/, 'Vocabulario · Ropa'],
     [/vocabulario\/viajes/, 'Vocabulario · Viajes'],
    [/verbos\/to-be/, 'Verbos · To Be'],
    [/verbos\/to-do/, 'Verbos · To Do'],
    [/verbos\/to-get/, 'Verbos · To Get'],
    [/verbos\/to-go/, 'Verbos · To Go'],
    [/verbos\/to-have/, 'Verbos · To Have'],
    [/verbos\/to-make/, 'Verbos · To Make'],
    [/gramatica\/articulos/, 'Gramática · Artículos'],
    [/gramatica\/pronombres/, 'Gramática · Pronombres'],
    [/gramatica\/presente-simple/, 'Gramática · Presente simple'],
    [/gramatica\/preposiciones/, 'Gramática · Preposiciones'],
    [/frases\/compras/, 'Frases · Compras'],
    [/frases\/saludos/, 'Frases · Saludos'],
    [/frases\/viajes/, 'Frases · Viajes'],
    [/otros\/antonimos/, 'Otros · Antónimos'],
    [/otros\/sinonimos/, 'Otros · Sinónimos'],
  ];

  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        const url = e.urlAfterRedirects as string;
        const hit = this.titleMap.find(([re]) => re.test(url));
        this.title = hit?.[1] ?? 'Biblioteca';
      });
  }
}
