import { Component, inject } from '@angular/core';
import { RedirectService } from '../services/redirect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private redirectService = inject(RedirectService);

  goTo(path: string): void {
    this.redirectService.goTo(path);
  }
}
