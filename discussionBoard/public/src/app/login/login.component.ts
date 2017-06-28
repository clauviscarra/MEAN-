import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";
import { LoginService } from "app/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any={};

  constructor(private _loginService:LoginService, private _router:Router) {
    if(Cookie.check("name")){
      this._router.navigateByUrl('dashboard')
    }
  }

  ngOnInit() {
  }

  login(){
    console.log('login component before service call')
    this._loginService.login(this.user)
    .then((data)=>{
      if(data.login){
        alert("success!")
        console.log(data.user.name)
        Cookie.set("name", data.user.name)
        this._router.navigateByUrl('dashboard')
      }
      else{
        alert(data.messages)
      }

    })
  }

}
