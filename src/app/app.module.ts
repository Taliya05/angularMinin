import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ModalComponent} from './modal/modal.component';
import {FormsModule} from "@angular/forms";
import {RefDirective} from "./ref.directive";


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    RefDirective

  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
