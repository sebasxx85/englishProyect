import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from '../header/header.component'; // Importar HeaderComponent desde su ubicación correcta
import { TopComponent } from './top.component';
import { SharedModule } from 'src/app/Shared/shared.module';

const routes: Routes = [
  { path: '', component: TopComponent }
];

@NgModule({
  declarations: [TopComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class TopModule { }