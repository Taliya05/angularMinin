import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AboutExtraPageComponent } from './about-page/about-extra-page/about-extra-page.component';
import {ColorDirective} from "./shared/color.directive";
import {PageNamePipe} from "./shared/page-name.pipe";
import {AppRoutingModule} from "./app-routing.module";



let PostComponent;

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    AboutExtraPageComponent,
    ColorDirective,
    PageNamePipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
