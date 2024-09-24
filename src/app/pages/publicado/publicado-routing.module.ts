import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicadoPage } from './publicado.page';

const routes: Routes = [
  {
    path: '',
    component: PublicadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicadoPageRoutingModule {}
