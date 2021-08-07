import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Gender="";
  cusname="";
  cuspass="";
  onOptionsSelected: any;


  class=["Class 1", "Class2 ","Class 3" , "Class 4"]

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  register(){
    alert("Registered Succesfully!")
  }
  back(){
    this.route.navigateByUrl('login')
  }
  
 

}
