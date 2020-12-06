import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../compartilhado/authentication-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  public usuario = { email: "", senha: "" };


  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  public retornoNome() {
    console.log(this.usuario);
    this.usuario = null;
  }

  login() {
    this.authService.SignIn(this.usuario.email, this.usuario.senha)
      .then((res) => {
        // console.log(res);
        // console.log(this.authService.GetCurrentUserData())
        // if (this.authService.isEmailVerified) {
        this.authService.SetUserData(res.user);
        console.log(res.user)
        this.router.navigate(['feed']);
        // } else {
        // window.alert('Email is not verified')
        // return false;
        // }
      }).catch((error) => {
        console.log(error)
        window.alert(error.message)
      })

  }


}
