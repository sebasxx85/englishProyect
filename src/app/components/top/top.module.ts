import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TopComponent } from './top.component';
import { SharedModule } from 'src/app/Shared/shared.module';

const routes: Routes = [
  { path: '', component: TopComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class TopModule { }