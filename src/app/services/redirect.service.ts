import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  private router = inject(Router);

  goTo(path: string): void {
    this.router.navigate([path]);
  }
}
