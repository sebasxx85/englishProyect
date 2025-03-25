import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisteredUseService } from 'src/app/services/registered-use.service';
import { SharedModule } from 'src/app/Shared/shared.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  title = "Panel de Control";

  public nombreUsuario: string | null = null;

  private registerUser = inject(RegisteredUseService)
  private router = inject(Router)

  ngOnInit(): void {
    // Cargar desde localStorage al iniciar
    this.nombreUsuario = localStorage.getItem('usuarioLogueado');
  }

  logout() {
    setTimeout(() => {
      this.registerUser.logout();
      this.nombreUsuario = null;
      this.router.navigate(['/home']);
    }, 2000);
  }

}
