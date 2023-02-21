import { NgModule } from '@angular/core';
import {LoginComponent} from "./login.component";
import {MaterialModule} from "../../shared/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path: 'login', component:LoginComponent  }]),
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
