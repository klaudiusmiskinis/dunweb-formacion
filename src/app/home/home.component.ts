import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FadeInOutAnimationDirective } from '../shared/directives/fade-in-out-animation.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [RouterLink, FadeInOutAnimationDirective]
})
export class HomeComponent {

}
