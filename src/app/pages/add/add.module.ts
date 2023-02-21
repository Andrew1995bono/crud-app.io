import { NgModule } from '@angular/core';
import {AddComponent} from "./add.component";
import {MaterialModule} from "../../shared/material.module";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AddComponent],
  imports: [
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [AddComponent]
})
export class AddModule { }
