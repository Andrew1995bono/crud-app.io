import {NgModule} from '@angular/core';
import {ItemsComponent} from "./items.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MaterialModule} from "../../shared/material.module";

@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{path: '', component: ItemsComponent}]),
  ],
  exports: [ItemsComponent]
})

export class ItemsModule { }
