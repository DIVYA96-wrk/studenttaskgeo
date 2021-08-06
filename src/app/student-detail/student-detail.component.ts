import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  id:any;
  result=[];
  isSpecial:boolean=false;
  studentDetails:any[]=[];
  // @Input()  items: string | null | undefined;
  // @Output() onCancel= new EventEmitter;
 
  constructor(private _Activatedroute:ActivatedRoute,private router:Router,private data:DataserviceService) { 
    this.studentDetails=this.data.studentMarkDetails
  }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.paramMap.get("id")
    this.studentDetails.forEach(element=>{
      if(element.stdcode==this.id && element.stdMark<250){
        this.isSpecial=true
        }
        
       
    });
    
  }
  
//   studentDetails=[
//     { stdcode:1000,username:"Divya", English:25,Hindi:25,Maths:25,Science:25,stdMark:100},
//    {  stdcode:1001, username:"Anu",English:40,Hindi:60,Maths:25,Science:75,stdMark:200},
//     {  stdcode:1002,username:"Deepa",English:30,Hindi:70,Maths:45,Science:55,stdMark:300 },
//    { stdcode:1003,username:"Priya", English:100,Hindi:150,Maths:50,Science:100,stdMark:400 }

//  ]



  
back(){
  this.router.navigateByUrl('stdtable')
}


}
