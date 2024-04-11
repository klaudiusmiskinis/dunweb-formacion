import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibreriaComponent } from './libreria/libreria.component';
import { ReactividadComponent } from './reactividad/reactividad.component';
import { SignalsComponent } from './signals/signals.component';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'libreria', component: LibreriaComponent },
  { path: 'reactividad', component: ReactividadComponent },
  { path: 'grids', component: GridComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
