import { NgModule } from '@angular/core';
import {MaterialModule} from "../../shared/material.module";
import {EditComponent} from "./edit.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AddComponent} from "../add/add.component";


@NgModule({
  declarations: [EditComponent],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([{path: '', component:EditComponent  }]),
  ],
  exports: [EditComponent]
})
export class EditModule { }
