import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicarviajePage } from './publicarviaje.page';

const routes: Routes = [
  {
    path: '',
    component: PublicarviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicarviajePageRoutingModule {}
