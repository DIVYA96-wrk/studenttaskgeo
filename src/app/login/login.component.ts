import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  stdname="";
  pswd="";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    var student= this.stdname;
    var psswd=this.pswd;
    if(student=="Divya" && psswd=="divya123")
    {
     alert("login succesful") 
     this.router.navigateByUrl("stdtable") }
    else{
      alert("invalid")
    }

  }
  back(){
    this.router.navigateByUrl('')
  }

}
