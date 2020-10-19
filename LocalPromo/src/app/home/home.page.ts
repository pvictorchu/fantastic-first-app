import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  public usuario = {name:"",senha:""};
  
  
  constructor() {}
    
  public retornoNome(){
      console.log(this.usuario);
      this.usuario = null;
    }
  

}
