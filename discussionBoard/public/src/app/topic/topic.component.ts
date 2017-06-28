import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";
import { LoginService } from "app/login.service";


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  question:any={};

  constructor(private _loginService:LoginService, private _router:Router) { }

  ngOnInit() {
  }

  addquestion(){
    console.log('question component before service call')
    this._loginService.question(this.question)
    .then((data)=>{
      if(data.question){
        alert("success!")
        console.log(data.question.text)
        this._router.navigateByUrl('dashboard')
      }
      else{
        alert(data.messages)
      }

    })
  }

}
