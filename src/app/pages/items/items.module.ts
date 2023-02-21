import { NgModule } from '@angular/core';
import {ItemsComponent} from "./items.component";



@NgModule({
  declarations: [ItemsComponent],
  exports: [
    ItemsComponent
  ],
  imports: []
})
export class ItemsModule { }
