import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

import { LoginService } from "app/login.service";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  name=Cookie.get("name")
  question ={}
  answer = {
    answer:"",
    details:"",
    user: this.name
    }
  constructor(private _router:Router, private _loginService: LoginService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
        this._loginService.show(this._activatedRoute.snapshot.params['id'])
        .then(data => {
        this.question = data

        })
        .catch(err => console.log(err))


  }

  create(){
    this._loginService.createAnswer(this._activatedRoute.snapshot.params['id'], this.answer)
    .then((data) => {
      this._router.navigateByUrl('dashboard')
    })
    .catch(err => console.log(err))
  }

}
