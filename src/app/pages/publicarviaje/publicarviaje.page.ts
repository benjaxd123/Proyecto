import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { viajePublicado } from 'src/app/interfaces/i_viaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publicarviaje',
  templateUrl: './publicarviaje.page.html',
  styleUrls: ['./publicarviaje.page.scss'],
})
export class PublicarviajePage implements OnInit {

  viaje:viajePublicado={
    Hasta: '',
    Valor: 0,
    Capacidad: 0 
  }

  constructor(private router:Router, private AlertController:AlertController) { }

  ngOnInit() {
  }

  publicarviaje(){
    console.log('datos del viaje');

    if (this.viaje.Hasta === '' || this.viaje.Valor == null || this.viaje.Capacidad == null || this.viaje.Valor < 1 || this.viaje.Capacidad < 1 || this.viaje.Capacidad >= 5) {
      this.alertaviaje('Datos incorrectos', '');
    } else {
      console.log('Viaje Publicado')
      this.router.navigate(["/publicado"]);
    }
    

  }


  async alertaviaje(header: string, message: string) {
    const alert = await this.AlertController.create({
      header: header,
      message: message,
      backdropDismiss: false,
      buttons: ['Aceptar']
    });
    await alert.present();
  }


}
