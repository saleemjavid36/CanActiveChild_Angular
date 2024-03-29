import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component';
import { HolaComponent } from './components/hola.component';
import { LoginComponent } from './components/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent, 
    HolaComponent, 
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
