import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";
import { AppointmentService } from "app/appointment.service";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  name=Cookie.get("name")
  appointment = {
    complaint:"",
    date:"",
    time:"",
    user: this.name
    }

  constructor(private _appointmentService:AppointmentService, private _router:Router) { }

  ngOnInit() {
  }

  create(){
    console.log('in your appointments component trying to create')
    this._appointmentService.createAppointment(this.appointment)
    .then((data)=>{
      if(data.error){
        alert(data.messages)
      }
      else{
        console.log(data)
        this._router.navigateByUrl('dashboard')
      }

    })
    .catch(err => console.log(err))
  }

}
