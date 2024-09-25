import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-logeado',
  templateUrl: './logeado.page.html',
  styleUrls: ['./logeado.page.scss'],
})
export class LogeadoPage{

  constructor(private menu: MenuController) {}


  menuLateral() {
    this.menu.open('mimenu');
  }

}
