import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";
import { AppointmentService } from "app/appointment.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name=Cookie.get("name")
  appointments : any= []

  constructor(private _appointmentService:AppointmentService, private _router:Router) {

  }


  ngOnInit() {
    function comp(a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
      }

    this._appointmentService.index()
    .then(data => {
    console.log(data)
    this.appointments = data.sort(comp)

    console.log(this.appointments)

    })
    .catch(err => console.log(err))
  }

  logOut(){
    Cookie.deleteAll()
    this._router.navigateByUrl('login')
  }
}
