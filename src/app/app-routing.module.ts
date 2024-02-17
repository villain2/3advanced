import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { BiographyComponent } from './components/biography/biography.component';
import { VisionComponent } from './components/vision/vision.component';
import { WebDesignComponent } from './components/web-design/web-design.component';
import { ExperimentalComponent } from './components/experimental/experimental.component';
import { AudioComponent } from './components/audio/audio.component';
import { MultimediaComponent } from './components/multimedia/multimedia.component';
import { ContactComponent } from './components/contact/contact.component';
import { ThreeAdvancedComponent } from './components/three-advanced/three-advanced.component';
import { EnvisionComponent } from './components/envision/envision.component';
import { MethodsInspirationComponent } from './components/methods-inspiration/methods-inspiration.component';
import { AwardsComponent } from './components/awards/awards.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'biography', component: BiographyComponent},
  {path: 'vision', component: VisionComponent},
  {path: 'web-design', component: WebDesignComponent},
  {path: 'experimental', component: ExperimentalComponent},
  {path: 'audio', component: AudioComponent},
  {path: 'multimedia', component: MultimediaComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'three-advanced', component: ThreeAdvancedComponent},
  {path: 'envision', component: EnvisionComponent},
  {path: 'awards', component: AwardsComponent},
  {path: 'methods-inspiration', component: MethodsInspirationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
