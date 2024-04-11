import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
  standalone: true,
  imports: [NavbarComponent],
})
export class LibreriaComponent {
  title = signal('Libreria');
}
