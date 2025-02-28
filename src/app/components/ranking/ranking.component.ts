import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from 'src/app/Shared/shared.module';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.scss'
})
export class RankingComponent {
  title = "Ranking";

}
