import { NgModule } from '@angular/core';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MinsaitUiCompLibModule } from 'minsait-ui-comp-lib';

@NgModule({
  imports: [MinsaitUiCompLibModule, FormsModule, ReactiveFormsModule],
  exports: [MinsaitUiCompLibModule, FormsModule, ReactiveFormsModule],
})
export class MinsaitModule {}
