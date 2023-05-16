import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'auth0-cliente';

  usuarioLogeado: any;

  constructor(private readonly auth0Service: AuthService){
  }
  ngOnInit(): void {
    this.verficarUsuarioLogeado();
    this.recuperarUsuario();
  }

  estaLogeado= false;

  login(){
   this.auth0Service.loginWithRedirect();
  }

  logout(){
  this.auth0Service.logout();
  }

  verficarUsuarioLogeado(){
    this.auth0Service.isAuthenticated$.subscribe(res => {
      this.estaLogeado = res
    })
  }


  recuperarUsuario(){

    this.auth0Service.user$.subscribe(usuario => {
      alert('usuario recuperado: ' + JSON.stringify(usuario))
      this.usuarioLogeado = usuario;
    })
  }

}
