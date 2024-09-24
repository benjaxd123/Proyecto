import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicadoPageRoutingModule } from './publicado-routing.module';

import { PublicadoPage } from './publicado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicadoPageRoutingModule
  ],
  declarations: [PublicadoPage]
})
export class PublicadoPageModule {}
