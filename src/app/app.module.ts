import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import {HeaderModule} from "./pages/header/header.module";
import {AddModule} from "./pages/add/add.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    AddModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
