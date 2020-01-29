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
  userfile:any=File;
  a:any;
  constructor(private router:Router,
              private service:DataService) { }

  ngOnInit() {
  }
  onRegister()
  {
    debugger;
    const formData=new FormData();
    formData.append("vicadd",JSON.stringify(this.vicadd))
    formData.append("file",this.userfile)
    let observableResult=this.service.RegCase(formData)
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
  OnSelectFile(event)
  {
    const file=event.target.files[0];
    this.userfile=file
  }
}
