import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MinsaitUiCompLibModule } from 'minsait-ui-comp-lib';

@NgModule({
  imports: [MinsaitUiCompLibModule, FormsModule],
  exports: [MinsaitUiCompLibModule, FormsModule],
})
export class MinsaitModule {}
