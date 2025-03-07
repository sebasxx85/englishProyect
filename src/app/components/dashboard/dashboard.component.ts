import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
export class DashboardComponent {

  title = "Panel de Control";

  public registerUser = inject(RegisteredUseService)
  private router = inject(Router)

  logout() {
    setTimeout(() => {
    this.registerUser.logout();
    this.router.navigate(['/home']);
  }, 2000);
}

}
