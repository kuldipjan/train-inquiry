import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './app/aboutus/aboutus.component';
import { HeaderComponent } from './app/header/header.component';
import { HomeComponent } from './app/home/home.component';
import { LivestationComponent } from './app/livestation/livestation.component';
import { SpotyourtrainComponent } from './app/spotyourtrain/spotyourtrain.component';
import { TrainbwstationComponent } from './app/trainbwstation/trainbwstation.component';
import { TrainscheduleComponent } from './app/trainschedule/trainschedule.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trainschedule', component: TrainscheduleComponent },
  { path: 'trainbwstation', component: TrainbwstationComponent },
  { path: 'livestation', component: LivestationComponent },
  { path: 'spotyourtrain', component: SpotyourtrainComponent },
  { path: 'header', component: HeaderComponent},
  { path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
