import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-nova-senha',
  templateUrl: './nova-senha.page.html',
  styleUrls: ['./nova-senha.page.scss'],
})
export class NovaSenhaPage{

  constructor(public alertCtrl: AlertController) { }  
  
  async showAlert() {  
    const alert = await this.alertCtrl.create({  
      header: 'Sucesso',  
      message: 'O foi enviado um  e-mail com reset de senha',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  

}
