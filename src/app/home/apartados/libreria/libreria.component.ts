import { Component, inject, signal } from "@angular/core";
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { FadeInOutAnimationDirective } from "src/app/shared/directives/fade-in-out-animation.directive";
import { NgFor } from "@angular/common";
import { MinsaitModule } from "src/app/shared/modules/minsait.module";
import {
  FormBuilder,
} from "@angular/forms";

@Component({
  selector: "app-libreria",
  templateUrl: "./libreria.component.html",
  styleUrls: ["./libreria.component.css"],
  standalone: true,
  imports: [NavbarComponent, FadeInOutAnimationDirective, MinsaitModule, NgFor],
})
export class LibreriaComponent {
  private fb = inject(FormBuilder);
  title = signal("Libreria");
  option = signal("");

  chips = signal([
    "minsait-button",
    "minsait-checkbox",
    "minsait-checkbox-group",
    "minsait-datalist",
    "minsait-datepicker",
    "minsait-environment-sticker",
    "minsait-field",
    "minsait-field-error",
    "minsait-file",
    "minsait-grid",
    "minsait-grid-column",
    "minsait-grid-column-header",
    "minsait-grid-with-panel",
    "minsait-header-bar",
    "minsait-messages",
    "minsait-modal",
    "minsait-notification",
    "minsait-option",
    "minsait-panel",
    "minsait-popup",
    "minsait-radio",
    "minsait-radio-group",
    "minsait-spinner",
    "minsait-tab",
    "minsait-tab-group",
    "mn-autocomplete",
    "mn-badge",
    "mn-button-toggle",
    "mn-button-toggle-group",
    "mn-dropdown",
    "mn-select",
    "mn-table",
    "mn-tabs",
    "mn-toggle-button",
    "mn-toggle-button-group",
  ]);

  form = this.fb.group({
    prueba: [""],
    pruebaDos: [""],
  });

  optionSeleccionada(event: any) {
    this.option.set(event);
  }
}
