import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajesactivosPage } from './viajesactivos.page';

const routes: Routes = [
  {
    path: '',
    component: ViajesactivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesactivosPageRoutingModule {}
