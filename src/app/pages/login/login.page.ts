import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioLog } from 'src/app/interfaces/i_login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usr: UsuarioLog = {
    username: '',
    password: ''
  }

  datos: any;

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  login(){
    console.log('logeandose oe');

    if (this.usr.username === '' || this.usr.password === '') {
      this.alerta('Faltan campos', 'Porfavor, complete todos los campos');
    } else {
      console.log('Usuario logeado')
      this.router.navigate(["/logeado"]);
    }
  }

  async alerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      backdropDismiss: false,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

}
