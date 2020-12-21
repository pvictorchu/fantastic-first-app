import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../compartilhado/authentication-service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  public user = {
    email: "",
    senha: "",
    nomeCompleto: ""
  };


  constructor(private authService: AuthenticationService) { }


  register(){
    this.authService.RegisterUser(this.user.email, this.user.senha);

  }


}
