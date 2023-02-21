import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AddModule} from "./pages/add/add.module";
import {LoginModule} from "./pages/login/login.module";
import {HeaderFooterModule} from "./shared/header-footer.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AddModule,
    LoginModule,
    HeaderFooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
