import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { CamaraComponent } from './camara/camara.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarSummitComponent } from './nav-bar-summit/nav-bar-summit.component';
import { ListaEscuelasComponent } from './lista-escuelas/lista-escuelas.component';
import { AppiGoogleMapsComponent } from './appi-google-maps/appi-google-maps.component';
import { SutatausaComponent } from './sutatausa/sutatausa.component';
import { MapsZonasComponent } from './maps-zonas/maps-zonas.component';
import { ListaZonasSutaComponent } from './lista-zonas-suta/lista-zonas-suta.component';
import { SutaZonaSolComponent } from './suta-zona-sol/suta-zona-sol.component';
import { SolBloquesComponent } from './sol-bloques/sol-bloques.component';
import { NinoRComponent } from './nino-r/nino-r.component';
import { LNinoRComponent } from './lnino-r/lnino-r.component';


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
    path: 'busqueda',
    component: BusquedaComponent,
  },
  {
    path:'nav-bar',
    component:NavBarComponent,
  },
  {
    path: 'sutatausa',
    component:SutatausaComponent,
  },
  {
    path: 'map-zonas',
    component: MapsZonasComponent,
  },
  {
    path:'lista-zonas-suta',
    component:ListaZonasSutaComponent,
  },
  {
    path:'suta-zona-sol',
    component:SutaZonaSolComponent,
  },
  {
    path:'sol-bloques',
    component:SolBloquesComponent,
  },
  {
    path:'nino-r',
    component: NinoRComponent,
  },
  {
    path:'lnino-r',
    component:LNinoRComponent,
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

// home
//-landing
//-Navbar
//--filtros
//--camara
//--opciones
//---busqueda



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    FiltrosComponent,
    CamaraComponent,
    PageNotFoundComponent,
    BusquedaComponent,
    NavBarComponent,
    NavBarSummitComponent,
    ListaEscuelasComponent,
    AppiGoogleMapsComponent,
    SutatausaComponent,
    MapsZonasComponent,
    ListaZonasSutaComponent,
    SutaZonaSolComponent,
    SolBloquesComponent,
    NinoRComponent,
    LNinoRComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
