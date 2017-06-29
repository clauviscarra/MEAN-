import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs';

@Injectable()
export class AppointmentService {

  constructor(private _http:Http) { }

  login(user){
  return this._http.post('/login', user)
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

createAppointment(appointment){
  console.log('in your service, trying to create appointment')
  return this._http.post('/appointment', appointment)
  .map((data)=>{
    return data.json()
  })
  .toPromise()

}
remove(id){
    return this._http.get(`/appointment/${id}/remove`)
    .map((data)=>{
      return data.json()
    })
    .toPromise()
  }

}
