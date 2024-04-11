import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
})
export class NavbarComponent {
  private router = inject(Router);
  @Input() title: string = '';

  goTo(route: string): void {
    this.router.navigate([route]);
  }
}
