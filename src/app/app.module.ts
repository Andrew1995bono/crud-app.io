import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes} from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderFooterModule} from "./shared/header-footer.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderFooterModule,
    RouterOutlet,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
