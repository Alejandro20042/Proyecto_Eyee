import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  LoginComponent  from "./dashboard/login/login.component";
import RegistroComponent from './dashboard/registro/registro.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'ProyectoEye';
}
