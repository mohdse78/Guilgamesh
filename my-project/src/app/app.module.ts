import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule, ArrayOfComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './pages/header/header.component';
import {AsideComponent} from './pages/aside/aside.component';
import {HttpClientModule} from "@angular/common/http";
import {InlineSVGModule} from "ng-inline-svg";
import {StepComponent} from './components/step/step.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    ArrayOfComponents,
    HeaderComponent,
    AsideComponent,
    StepComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
