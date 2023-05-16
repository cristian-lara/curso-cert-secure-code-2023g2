import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auth0-cliente';

  estaLogeado= false;

  login(){
    alert('Login listo')
    this.estaLogeado = true;
  }

  logout(){
    alert('logout listo')
    this.estaLogeado = false;
  }

}
