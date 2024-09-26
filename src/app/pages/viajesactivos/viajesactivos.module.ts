import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajesactivosPageRoutingModule } from './viajesactivos-routing.module';

import { ViajesactivosPage } from './viajesactivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesactivosPageRoutingModule
  ],
  declarations: [ViajesactivosPage]
})
export class ViajesactivosPageModule {}
