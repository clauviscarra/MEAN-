import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";
import { AppointmentService } from "app/appointment.service";
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor(private _appointmentService:AppointmentService, private _router:Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._appointmentService.remove(this._activatedRoute.snapshot.params['id'])
    .then(data =>{
      this._router.navigateByUrl('dashboard')
    })
    .catch(err=> console.log(err))
  }

}
