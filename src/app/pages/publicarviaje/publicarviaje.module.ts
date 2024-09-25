import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublicarviajePageRoutingModule } from './publicarviaje-routing.module';

import { PublicarviajePage } from './publicarviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublicarviajePageRoutingModule
  ],
  declarations: [PublicarviajePage]
})
export class PublicarviajePageModule {}
