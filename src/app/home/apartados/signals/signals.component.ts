import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { SolucionUnoComponent } from './solucion/solucion-uno.component';
import { FadeInOutAnimationDirective } from 'src/app/shared/directives/fade-in-out-animation.directive';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css'],
  standalone: true,
  imports: [NavbarComponent, SolucionUnoComponent, FadeInOutAnimationDirective],
})
export class SignalsComponent {
  
}
