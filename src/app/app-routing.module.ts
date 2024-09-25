import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'conductores',
    loadChildren: () => import('./pages/conductores/conductores.module').then( m => m.ConductoresPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reserva',
    loadChildren: () => import('./pages/reserva/reserva.module').then( m => m.ReservaPageModule)
  },
  {
    path: 'seguimiento',
    loadChildren: () => import('./pages/seguimiento/seguimiento.module').then( m => m.SeguimientoPageModule)
  },
  {
    path: 'cancelado',
    loadChildren: () => import('./pages/cancelado/cancelado.module').then( m => m.CanceladoPageModule)
  },
  {
    path: 'logeado',
    loadChildren: () => import('./pages/logeado/logeado.module').then( m => m.LogeadoPageModule)
  },
  {
    path: 'modoconductor',
    loadChildren: () => import('./pages/modoconductor/modoconductor.module').then( m => m.ModoconductorPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'cerrarsesion',
    loadChildren: () => import('./pages/cerrarsesion/cerrarsesion.module').then( m => m.CerrarsesionPageModule)
  },
  {
    path: 'homeconductor',
    loadChildren: () => import('./pages/homeconductor/homeconductor.module').then( m => m.HomeconductorPageModule)
  },
  {
    path: 'publicarviaje',
    loadChildren: () => import('./pages/publicarviaje/publicarviaje.module').then( m => m.PublicarviajePageModule)
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./pages/mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
