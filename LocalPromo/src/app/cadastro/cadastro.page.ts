import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage  {
  public usuario2 = {name:"",
                    senha:"", 
                    nomeCompleto :""
                   };


  constructor() {}
    
  public retorno(){
      console.log(this.usuario2);

    }
  

}
