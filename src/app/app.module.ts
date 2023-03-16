import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PostComponent } from './post/post.component';
import { PostFormComponent } from './post-form/post-form.component';
import {StyleDirective} from "./directives/style.directives";
import { IfNotDirective } from './directives/if-not.directive';
import {MultByPipes} from "./pipes/mult-by.pipes";
import { ExMarksPipe } from './pipes/ex-marks.pipe';
// import { FilterPipe } from './pipes/filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostFormComponent,
    StyleDirective,
    IfNotDirective,
    MultByPipes,
    ExMarksPipe,
    // FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
