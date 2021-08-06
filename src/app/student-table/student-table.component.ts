import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  closeflag=0;
   flag=0;
   scode="";
   html_data:any=[];
   array1:any=[]
  constructor(private router:Router,private data:DataserviceService) { }

  ngOnInit(): void {
  }

  studentDetails:any=[
     {  username: "Divya", stdcode:1000, stdclass:"1 std" , stdMark:100},
    {   username: "Anu", stdcode:1001, stdclass:"1 std" , stdMark:200},
     {  username: "Deepa", stdcode:1002, stdclass:"1 std" , stdMark:300 },
    {  username: "Priya", stdcode:1003, stdclass:"1 std" , stdMark:400 }

  ]

  view(stdcode:any){
     this.flag=1;
    var code:any=stdcode;
console.log(code);
this.scode=code;


  }
  onCancel(){
    this.flag=0;
  }

  logout(){
    this.router.navigateByUrl('')
  }

  showdata(){
    this.closeflag=1;
this.data.showdata()
.subscribe((result:any)=>{

  this.html_data=result.response['#result-set-1'];
  
  console.log(result)

})
  }

  close(){
     this.closeflag=0;
  }

}


