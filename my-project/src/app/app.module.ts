import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule, ArrayOfComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './pages/header/header.component';
import {AsideComponent} from './pages/aside/aside.component';
import {HttpClientModule} from "@angular/common/http";
import {InlineSVGModule} from "ng-inline-svg";


@NgModule({
  declarations: [
    AppComponent,
    ArrayOfComponents,
    HeaderComponent,
    AsideComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    InlineSVGModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
