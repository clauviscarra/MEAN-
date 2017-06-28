import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { LoginService } from "app/login.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
question={}
name = Cookie.get("name")
  constructor(private _router:Router, private _loginService: LoginService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this._loginService.show(this._activatedRoute.snapshot.params['id'])
    .then(data => {
    this.question = data

    })
    .catch(err => console.log(err))
  }

  likes(id){
    this._loginService.like(id)
    .then(data =>{
    
    })
    .catch(err => console.log(err))

    this._loginService.show(this._activatedRoute.snapshot.params['id'])
    .then(data => {
    this.question = data

    })
    .catch(err => console.log(err))
  }

}
