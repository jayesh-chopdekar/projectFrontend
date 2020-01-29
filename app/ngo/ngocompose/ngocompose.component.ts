import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ngocompose',
  templateUrl: './ngocompose.component.html',
  styleUrls: ['./ngocompose.component.css']
})
export class NgocomposeComponent implements OnInit {
  msg={from:"",to:"",msg:""}
  constructor(private service:DataService,
               private router:Router) { }

  ngOnInit() {
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
        this.router.navigate(['ngo'])
      }
      else
      {
        alert('message not sent')
        this.router.navigate(['ngo'])
      }
    })
  }

}
