import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { NavHoverComponent } from './components/audio/nav-hover/nav-hover.component';
import { BottomNavbarComponent } from './components/navigation/bottom-navbar/bottom-navbar.component';
import { SecondaryNavComponent } from './components/navigation/secondary-nav/secondary-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    NavHoverComponent,
    BottomNavbarComponent,
    SecondaryNavComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
