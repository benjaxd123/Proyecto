import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular'; 
import { buscar } from 'src/app/interfaces/i_buscar';

@Component({
  selector: 'app-logeado',
  templateUrl: './logeado.page.html',
  styleUrls: ['./logeado.page.scss'],
})
export class LogeadoPage implements OnInit { 

  bsc: buscar = {
    desde: '',
    hasta: ''
  }

  constructor(private menu: MenuController, private router: Router, private alertController: AlertController) {}

  menuLateral() {
    this.menu.open('mimenu3');
  }

  buscar() {
    console.log('datos del viaje');

    if (this.bsc.desde === '' || this.bsc.hasta === '') { 
      this.alertabuscar('Datos incorrectos', 'Por favor, complete todos los campos');
    } else {
      console.log('Viaje Publicado');
      this.router.navigate(["/conductores"]);
    }
  }

  async alertabuscar(header: string, message: string) {
    const alert = await this.alertController.create({ 
      header: header,
      message: message,
      backdropDismiss: false,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  ngOnInit() {
  }
}