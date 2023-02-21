import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";
import {MaterialModule} from "../../shared/material.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
