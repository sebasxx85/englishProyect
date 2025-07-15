import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const user = localStorage.getItem('usuarioLogueado');
  const router = inject(Router);

  if (user === 'seba85') {
    return true;
  } else {
    router.navigate(['/library']); // o puedes crear /forbidden
    return false;
  }
};
