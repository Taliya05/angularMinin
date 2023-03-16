import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {StyleDirective} from "./directives/style.directives";
import { IfNotDirective } from './directives/if-not.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { DatePipePipe } from './pipes/date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    IfNotDirective,
    FilterPipe,
    DatePipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
