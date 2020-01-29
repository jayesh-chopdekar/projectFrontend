import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admincompose',
  templateUrl: './admincompose.component.html',
  styleUrls: ['./admincompose.component.css']
})
export class AdmincomposeComponent implements OnInit {

  msg={to:"",from:"",msg:""}

  constructor(private service:DataService,
              private router:Router) { }

  ngOnInit() 
  {
    debugger;
    this.msg.to=sessionStorage.getItem('useremail');
    this.msg.from=localStorage.getItem('email')
  }

  OnSend()
  {
    console.log(this.msg)
    let observableResult=this.service.SendMsg(this.msg)
    observableResult.subscribe((result)=>{
      if(result==true)
      {
        alert('message sent');
        this.router.navigate(['admin'])
      }
      else
      {
        alert('message not sent')
        this.router.navigate(['admin'])
      }
    })
  }
}
