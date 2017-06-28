import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "app/login/login.component";
import { TopicComponent } from "app/topic/topic.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { UserComponent } from "app/user/user.component";
import { AnswerComponent } from "app/answer/answer.component";




const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo:'login'},
  { path: 'login', component:LoginComponent},
  { path: 'topic', component:TopicComponent},
  { path: 'dashboard', component:DashboardComponent},
  { path: 'user/:id', component:UserComponent},
  { path: 'answer/:id', component:AnswerComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
