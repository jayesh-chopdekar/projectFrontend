import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policecompose',
  templateUrl: './policecompose.component.html',
  styleUrls: ['./policecompose.component.css']
})
export class PolicecomposeComponent implements OnInit {

  msg={from:"",to:"",msg:""}

  constructor(private service:DataService,
              private router:Router) { }

  ngOnInit() 
  {
    this.msg.from=localStorage.getItem("email");
    this.msg.to=sessionStorage.getItem('useremail')
  }

  OnSend()
  {
    console.log(this.msg)
    let observableResult=this.service.SendMsg(this.msg)
    observableResult.subscribe((result)=>{
      if(result==true)
      {
        alert('message sent');
        this.router.navigate(['police'])
      }
      else
      {
        alert('message not sent')
        this.router.navigate(['police'])
      }
    })
  }
}
