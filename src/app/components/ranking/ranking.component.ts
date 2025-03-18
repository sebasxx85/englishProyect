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
    MatCardModule
  ],
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  title = "TOP Users";
  users: any[] = [];
  topUsers: any[] = [];
  displayedColumns: string[] = ['position', 'avatar', 'name', 'score', 'language'];

  private usersRankingService = inject(UsersRankingService);

  ngOnInit(): void {
    this.usersRankingService.obtenerUsers().subscribe({
      next: (data) => {
        // Ordenar usuarios de mayor a menor puntaje
        this.users = data.sort((a, b) => b.score - a.score);

        // Tomar solo los 30 primeros y agregar la posición
        this.topUsers = this.users.slice(0, 30).map((user, index) => ({
          ...user,
          position: index + 1
        }));

        console.log('Usuarios cargados:', this.topUsers);
      },
      error: (error) => {
        console.error('Error al cargar usuarios:', error);
      }
    });
  }
}



