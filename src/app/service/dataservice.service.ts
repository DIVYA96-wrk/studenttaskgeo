import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient ) { 



  }

  studentMarkDetails=[
    { stdcode:1000,username:"Divya", English:25,Hindi:25,Maths:25,Science:25,stdMark:100},
   {  stdcode:1001, username:"Anu",English:40,Hindi:60,Maths:25,Science:75,stdMark:200},
    {  stdcode:1002,username:"Deepa",English:30,Hindi:70,Maths:45,Science:55,stdMark:300 },
   { stdcode:1003,username:"Priya", English:100,Hindi:150,Maths:50,Science:100,stdMark:400 }

 ]

  showdata(){
    let data=
    {
      "xIdentifier": "52324e6a6458424462476c6c626e5251636d394965574a796157513d",
      "requestParameter": {
        "Clientid": 1290119560,
        "DpClientid": "",
        "dpid": ""
      }
    }
    
return this.http.post(environment.URL,data)
  }
}


