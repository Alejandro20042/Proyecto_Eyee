import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import  RegistroComponent from './registro/registro.component';

@NgModule({
  declarations: [
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginComponent,
    RegistroComponent
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule { }
