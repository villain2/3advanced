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
import { BiographyComponent } from './components/biography/biography.component';
import { VisionComponent } from './components/vision/vision.component';
import { WebDesignComponent } from './components/web-design/web-design.component';
import { ExperimentalComponent } from './components/experimental/experimental.component';
import { AudioComponent } from './components/audio/audio.component';
import { MultimediaComponent } from './components/multimedia/multimedia.component';
import { ContactComponent } from './components/contact/contact.component';
import { ThreeAdvancedComponent } from './components/three-advanced/three-advanced.component';
import { AwardsComponent } from './components/awards/awards.component';
import { EnvisionComponent } from './components/envision/envision.component';
import { MethodsInspirationComponent } from './components/methods-inspiration/methods-inspiration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    NavHoverComponent,
    BottomNavbarComponent,
    SecondaryNavComponent,
    BiographyComponent,
    VisionComponent,
    WebDesignComponent,
    ExperimentalComponent,
    AudioComponent,
    MultimediaComponent,
    ContactComponent,
    ThreeAdvancedComponent,
    AwardsComponent,
    EnvisionComponent,
    MethodsInspirationComponent
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
