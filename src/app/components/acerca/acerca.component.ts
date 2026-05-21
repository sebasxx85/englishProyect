import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/Shared/shared.module';

@Component({
    selector: 'app-acerca',
    imports: [CommonModule, MatCardModule, SharedModule],
    templateUrl: './acerca.component.html',
    styleUrl: './acerca.component.scss'
})
export class AcercaComponent { 
  title = "Acerca del sitio";
}
