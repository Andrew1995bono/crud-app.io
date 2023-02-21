import { NgModule } from '@angular/core';
import {ItemsComponent} from "./items.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component:ItemsComponent}]),
  ],
  exports: [
    ItemsComponent
  ],

})
export class ItemsModule { }
