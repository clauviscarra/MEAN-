import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { LoginComponent } from './login/login.component';

import { AppointmentService } from "app/appointment.service";
import { RemoveComponent } from './remove/remove.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppointmentComponent,
    LoginComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
