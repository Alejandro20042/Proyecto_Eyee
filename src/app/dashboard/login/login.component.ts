import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import RegistroComponent from '../registro/registro.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export default class LoginComponent {

  constructor(private router: Router) { }

  // navigateToRegistro() {
  //   this.router.navigate(['/registro']);
  // }

}
