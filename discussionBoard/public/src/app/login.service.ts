import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs';

@Injectable()
export class LoginService {

  constructor(private _http:Http) { }

  login(user){
    return this._http.post('/login', user)
    .map((data)=>{
      return data.json()
    })
    .toPromise();
  }

  question(question){
    return this._http.post('/newquestions', question)
    .map((data)=>{
      return data.json()
    })
    .toPromise();
  }

  index(){
  return this._http.get('/dashboard')
  .map((data)=>{
    return data.json()
  })
  .toPromise();
}

  show(id){
    return this._http.get(`/questions/${id}`)
    .map((data)=>{
      return data.json()
    })
    .toPromise()
  }

  createAnswer(id, answer){
    return this._http.post(`/answers/${id}`, answer)
    .map((data)=>{

      return data.json()
    })
    .toPromise()


  }
  like(id){
    return this._http.post(`/answers/${id}/like`, {id:id})
    .map((data)=>{

      return data.json()
    })
    .toPromise()
  }


}
