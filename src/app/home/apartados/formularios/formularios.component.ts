import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { FadeInOutAnimationDirective } from 'src/app/shared/directives/fade-in-out-animation.directive';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FadeInOutAnimationDirective],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})
export class FormulariosComponent {
  private hg = inject(HighlightService);
  
  ngAfterViewChecked() {
    this.hg.highlightAll();
  }

  example2 = `<form (ngSubmit)="onSubmit()">
  <input [(ngModel)]="usuario.nombre" name="nombre" type="text" placeholder="Nombre">
  <input [(ngModel)]="usuario.email" name="email" type="email" placeholder="Email">
  <button type="submit">Enviar</button>
</form>`

example1 = `export class MiFormularioComponent {
  usuario = {
     nombre: '',
     email: ''
  };
 
  onSubmit() {
     console.log(this.usuario);
  }
 }`

 example3 = `miFormulario = this.fb.group({
  nombre: ['', [Validators.required, Validators.minLength(4)]],
  email: ['', [Validators.required, Validators.email]]
});

onSubmit() {
  console.log(this.miFormulario.value);
}`;

example4 = `<form [formGroup]="miFormulario" (ngSubmit)="onSubmit()">
  <input formControlName="nombre" type="text" placeholder="Nombre">
  <input formControlName="email" type="email" placeholder="Email">
  <button type="submit">Enviar</button>
</form>`

example5 = `this.miFormulario.get('nombre').valueChanges.subscribe(valor => {
  console.log("El nombre cambió a:", valor);
});`

} 
