import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { CamaraComponent } from './camara/camara.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BusquedaComponent } from './busqueda/busqueda.component';


//la contante de mi Routermodule

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path: 'landing',
    component:LandingComponent,
  },
  {
    path: 'filtros',
    component:FiltrosComponent,
  },
  {
    path: 'camara',
    component:CamaraComponent,
  },
  {
   path: 'opciones',
   component: OpcionesComponent,
  },
  {
    path: 'busqueda',
    component: BusquedaComponent,
  },
  {
    path:'',
    redirectTo: '/home',
    pathMatch:'full',
  },
  {
    path:'**',
    component:PageNotFoundComponent,
  }
];

/*-- los modulos d emi app--*/

// landing
//home
//filtros
//camara
//opciones


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    FiltrosComponent,
    CamaraComponent,
    OpcionesComponent,
    PageNotFoundComponent,
    BusquedaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
