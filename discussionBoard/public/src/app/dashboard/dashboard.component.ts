import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";
import { LoginService } from "app/login.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name=Cookie.get("name")
  questions =[]

  constructor(private _router:Router, private _loginService: LoginService) { }

  ngOnInit() {
    this._loginService.index()
    .then(data => {
    this.questions = data
    console.log(this.questions)

    })
    .catch(err => console.log(err))
  }

  logOut(){
    Cookie.deleteAll()
    this._router.navigateByUrl('login')
  }

}
