import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { SolucionUnoComponent } from './solucion/solucion-uno.component';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css'],
  standalone: true,
  imports: [NavbarComponent, SolucionUnoComponent],
})
export class SignalsComponent {
  
}
