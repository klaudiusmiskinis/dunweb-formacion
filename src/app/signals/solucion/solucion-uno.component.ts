import { Component, WritableSignal, computed, signal } from '@angular/core';
import { MinsaitModule } from 'src/app/minsait.module';

@Component({
  selector: 'solucion-signals',
  templateUrl: './solucion-uno.component.html',
  styleUrls: ['./solucion-uno.component.css'],
  standalone: true,
  imports: [MinsaitModule]
})
export class SolucionUnoComponent {
  contador: WritableSignal<number> = signal<number>(0);
  dobleValor = computed(() => this.contador() * 2);

  restar() {
    this.contador.update(value => value - 1);
  }

  sumar() {
    this.contador.update(value => value + 1);
  }
}
