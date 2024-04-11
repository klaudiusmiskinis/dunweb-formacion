import { Component, inject, signal } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { ApiService } from '../services/api.service';
import {
  AsyncPipe,
  JsonPipe,
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { MinsaitModule } from '../minsait.module';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    AsyncPipe,
    JsonPipe,
    MinsaitModule,
    NgFor,
    NgIf,
    NgSwitchDefault,
    NgSwitchCase,
    NgSwitch,
  ],
})
export class GridComponent {
  private api = inject(ApiService);

  employee$ = this.api.getEmployees();

  datos = signal<any>([]);
  columnas = signal<any>([]);
  columnasDos = signal<any>([]);
  editState: { row: number; col: string; originalValue: any } | null = null;
  outputGridUno = signal<any>('');
  configuracionPaginacion = {
    pageSize: 10,
    totalPages: 1,
    page: 1,
    totalItems: 0,
    paginationPageSizes: [5, 10, 20],
    order: 'asc',
    ascending: true,
    default: true,
  };

  constructor() {
    /* Grid 1 */
    this.columnas.set([
      { name: 'id', displayName: 'ID', enableSorting: true },
      { name: 'nombre', displayName: 'Nombre', enableSorting: true },
      { name: 'descripcion', displayName: 'Descripción', enableSorting: false },
    ]);

    /* Grid 2 */
    this.columnasDos.set([
      {
        name: 'id',
        displayName: 'ID',
        enableSorting: true,
        enableEditing: true,
      },
      {
        name: 'nombre',
        displayName: 'Nombre',
        enableSorting: true,
        enableEditing: true,
      },
      {
        name: 'descripcion',
        displayName: 'Descripción',
        enableSorting: false,
        enableEditing: true,
      },
    ]);
  }

  /* Grid 1-2 */
  ngOnInit(): void {
    this.cargarDatos();
  }

  /* Grid 1-2 */
  cargarDatos(): void {
    this.datos.set([]);

    for (let index = 0; index < 101; index++) {
      const element = {
        id: index,
        nombre: 'Elemento ' + index,
        descripcion: 'Descripción del Elemento ' + index,
        estado: index % 2 === 0 ? true : false,
      };
      this.datos().push(element);
    }
  }
  /* Grid 1 */
  onSort(evento: any): void {
    if (evento.dir == 'asc')
      this.outputGridUno.set(
        'Se ha ordenado ascendentemente la columna ' + evento.name,
      );
    if (evento.dir == 'desc')
      this.outputGridUno.set(
        'Se ha ordenado descendentemente la columna ' + evento.name,
      );
  }
  /* Grid 1 */
  onSelectItem(evento: any): void {
    if (evento.accion == 'select')
      this.outputGridUno.set('Se ha seleccionado el ítem ' + evento.item.id);
    if (evento.accion == 'unselect')
      this.outputGridUno.set('Se ha deseleccionado el ítem ' + evento.item.id);
  }
  /* Grid 1 */
  onPaginationChange(evento: any): void {
    if (evento.accion == 'nextPage')
      this.outputGridUno.set('Se han saltado a la página siguiente');
    if (evento.accion == 'prevPage')
      this.outputGridUno.set('Se han vuelto a la página anterior');
  }
  /* Grid 1 */
  onSelectAll(evento: any): void {
    if (evento.accion == 'select')
      this.outputGridUno.set('Se han seleccionado todos los ítems');
    if (evento.accion == 'unselect')
      this.outputGridUno.set('Se han deseleccionado todos los ítems');
  }

  /* Grid 2 */
  editingCells = new Map<string, boolean>();
  /* Grid 2 */
  toggleEdit(rowIdx: number, colName: string) {
    this.editingCells.forEach((_, key) => this.editingCells.set(key, false)); // Cancel editing on all cells
    const key = `${rowIdx}-${colName}`;
    this.editingCells.set(key, true);
  }

  /* Grid 2 */
  isCellEditable(rowIdx: number, colName: string): boolean {
    return this.editingCells.get(`${rowIdx}-${colName}`) || false;
  }

  /* Grid 2 */
  cancelEdit() {
    this.editingCells.forEach((_, key) => this.editingCells.set(key, false));
  }

  /* Grid 2 */
  saveChanges(rowIdx: number, colName: string, event: Event) {
    this.datos()[rowIdx][colName] = (event.target as HTMLInputElement).value;
    this.cancelEdit();
  }
}
