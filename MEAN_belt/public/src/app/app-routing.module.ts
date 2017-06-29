import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { LoginComponent } from './login/login.component';
import { RemoveComponent } from './remove/remove.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo:'login'},
  { path: 'login', component:LoginComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'appointment', component:AppointmentComponent},
  { path: 'remove/:id', component:RemoveComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
