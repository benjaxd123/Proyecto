import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuarioReg } from 'src/app/interfaces/i_registro';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usr: UsuarioReg = {
    nomUsuario: '',
    telefono: '',
    correo: '',
    password: '',
    confPassword: ''
  }
  datos: any;

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  registrarse() {
    console.log("Registrando Usuario");

    if (this.usr.nomUsuario === '' || this.usr.telefono === '' || this.usr.correo === ''|| this.usr.password === '' || this.usr.confPassword === '') {
      this.alerta('Faltan campos', 'Por favor, complete todos los campos.');

    } else if (this.usr.password !== this.usr.confPassword) {
      this.alerta('Las contraseñas no coinciden', 'Las contraseñas no son iguales.');

    } else {
      console.log("Usuario registrado correctamente!");
      this.router.navigate(["/login"]);
    }

    this.datos.agregarUsuario(this.usr); // Agregar el usuario al servicio
    console.log("Usuario registrado correctamente!");
    this.router.navigate(['/home']); // Navegar a la página de inicio
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