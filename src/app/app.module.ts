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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
