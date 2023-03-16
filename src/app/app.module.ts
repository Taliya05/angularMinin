import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {StyleDirective} from "./directives/style.directives";
import { IfNotDirective } from './directives/if-not.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { DatePipePipe } from './pipes/date-pipe.pipe';
import { StrlengthPipe } from './pipes/strlength.pipe';
import {CounterService} from "./services/counter.service";
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    IfNotDirective,
    FilterPipe,
    DatePipePipe,
    StrlengthPipe,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CounterService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
