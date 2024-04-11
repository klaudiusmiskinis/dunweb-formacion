import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibreriaComponent } from './home/apartados/libreria/libreria.component';
import { SignalsComponent } from './home/apartados/signals/signals.component';
import { HomeComponent } from './home/home.component';
import { GridComponent } from './home/apartados/grid/grid.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signals', component: SignalsComponent },
  { path: 'libreria', component: LibreriaComponent },
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
