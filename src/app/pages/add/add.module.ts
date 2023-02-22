import {NgModule} from '@angular/core';
import {AddComponent} from "./add.component";
import {MaterialModule} from "../../shared/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{path: '', component: AddComponent}]),
    ReactiveFormsModule
  ],
  exports: [AddComponent]
})

export class AddModule { }
