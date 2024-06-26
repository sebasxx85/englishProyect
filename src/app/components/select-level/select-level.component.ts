import { Component, inject } from '@angular/core';
import { DataLevel1Service } from 'src/app/services/data-level1.service';

@Component({
  selector: 'app-select-level',
  templateUrl: './select-level.component.html',
  styleUrls: ['./select-level.component.scss']
})
export class SelectLevelComponent {
  private dataLevel1 = inject(DataLevel1Service);



}
