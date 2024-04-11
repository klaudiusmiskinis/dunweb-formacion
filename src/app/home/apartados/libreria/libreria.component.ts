import { Component, inject, signal } from '@angular/core';
import { RedirectService } from '../../../services/redirect.service';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
  standalone: true,
  imports: [NavbarComponent],
})
export class LibreriaComponent {
  private redirectService = inject(RedirectService);
  title = signal('Libreria');

  goTo(path: string): void {
    this.redirectService.goTo(path);
  }
}
