import { Component, OnInit, inject } from '@angular/core';
import { UsersRankingService } from 'src/app/services/users-ranking.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/Shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
  ],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'] // ← Corrección aquí
})
export class RankingComponent implements OnInit {
  title = "TOP Users";
  users: any[] = [];
  topUsers: any[] = [];
  displayedColumns: string[] = ['position', 'avatar', 'name', 'score', 'language']; // Agregamos 'position'

  private usersRankingService = inject(UsersRankingService);

  ngOnInit(): void {
    this.users = this.usersRankingService.obtenerUsers()
      .sort((a, b) => b.score - a.score); // Ordenar de mayor a menor
    
    this.topUsers = this.users.slice(0, 30).map((user, index) => ({
      ...user,
      position: index + 1 // Agregamos el puesto
    }));
  }
}



