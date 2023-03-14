import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './app/home/home.component';
import { TrainscheduleComponent } from './app/trainschedule/trainschedule.component';
import { TrainbwstationComponent } from './app/trainbwstation/trainbwstation.component';
import { LivestationComponent } from './app/livestation/livestation.component';
import { SpotyourtrainComponent } from './app/spotyourtrain/spotyourtrain.component';
import { HeaderComponent } from './app/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrainscheduleComponent,
    TrainbwstationComponent,
    LivestationComponent,
    SpotyourtrainComponent,
    HeaderComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
