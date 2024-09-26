import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pasajeros',
  templateUrl: './pasajeros.page.html',
  styleUrls: ['./pasajeros.page.scss'],
})
export class PasajerosPage{

  constructor(private alertController: AlertController) { }

  async mostrarAlerta() {


    const alert = await this.alertController.create({
      header:'Nombre: Pepito Peréz',
      subHeader: 'Correo: yoelpepito@duocuc.cl',
      message: 'Teléfono: +569 71384950',
      backdropDismiss:false,
      buttons: [{
        text: "Aceptar",
        cssClass: 'btn-aceptar'
      }]
    });

    await alert.present();
  }

}
