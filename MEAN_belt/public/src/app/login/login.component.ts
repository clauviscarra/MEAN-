import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";
import { AppointmentService } from "app/appointment.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any={};
  constructor(private _appointmentService:AppointmentService, private _router:Router) {
    if(Cookie.check("name")){
      this._router.navigateByUrl('dashboard')
    }
  }

  ngOnInit() {
  }

  login(){
  console.log('login component before service call')
  this._appointmentService.login(this.user)
  .then((data)=>{
    if(data.login){
      alert("success!")
      Cookie.set("name", data.user.name)
      this._router.navigateByUrl('dashboard')
    }
    else{
      alert(data.messages)
    }

  })
}

}
