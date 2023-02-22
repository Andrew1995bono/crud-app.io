import {NgModule} from '@angular/core';
import {MaterialModule} from "./material.module";
import {HeaderComponent} from "../pages/header/header.component";
import {FooterComponent} from "../pages/footer/footer.component";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    RouterLink,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class HeaderFooterModule { }
