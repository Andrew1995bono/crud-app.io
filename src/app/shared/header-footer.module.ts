import { NgModule } from '@angular/core';
import {MaterialModule} from "./material.module";
import {HeaderComponent} from "../pages/header/header.component";
import {FooterComponent} from "../pages/footer/footer.component";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class HeaderFooterModule { }
