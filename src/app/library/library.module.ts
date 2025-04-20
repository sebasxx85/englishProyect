// library.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';


@NgModule({
  imports: [
    CommonModule,
    LibraryComponent, // ✅ Standalone
  ]
})
export class LibraryModule {}
