import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNull } from 'util';

@Component({
  selector: 'app-regcase',
  templateUrl: './regcase.component.html',
  styleUrls: ['./regcase.component.css']
})
export class RegcaseComponent implements OnInit {
  vicadd={name:"",age:"",height:"",bgrp:"",city:"",state:"",country:"",gender:"",phno:"",dob:"",missingDate:"",cmpNo:""}
  a:any;
  constructor(private router:Router,
              private service:DataService) { }

  ngOnInit() {
  }
  onRegister()
  {
    debugger;
    let observableResult=this.service.RegCase(this.vicadd)
    observableResult.subscribe((result)=>{
      this.a=result
      if(!isNull(this.a))
      {
        alert('Case registration Successfull ..');
        this.router.navigate(['/police']);    
      }
      else
      {
        alert('case reg unsu');
      }
    })
  }
}
