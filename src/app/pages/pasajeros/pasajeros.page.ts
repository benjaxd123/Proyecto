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
      header:'Cliente 1:',
      subHeader: 'Nombre: José Peréz',
      backdropDismiss:false,
      buttons: [{
        text: "Aceptar",
        cssClass: 'btn-aceptar'
      }]
    });

    await alert.present();
  }

}
