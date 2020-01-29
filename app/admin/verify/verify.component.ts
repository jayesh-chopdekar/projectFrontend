import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { isNull } from 'util';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  userlist:any;
  constructor(private service:DataService,
              private router:Router) { }

  UserList()
  {
    let observableResult=this.service.UnVer()
    observableResult.subscribe((result)=>{
      if(!isNull(result))
      {
        this.userlist=result;
      }
      else
      {
        alert('No One to verify')
        this.router.navigate(['admin'])
      }
    })
  }
  ngOnInit() 
  {
    this.UserList()
  }
  OnVerify(id)
  {
    let status=this.service.Verify(id);
    status.subscribe((result)=>{
      if(result==true)
      {
        this.UserList()
      }
      else
      {
        alert('verification failed');
      }
    })
  }
  OnDelete(id)
  {
    let del=this.service.RemUser(id)
    del.subscribe((result)=>{
      this.UserList();
    })
  }
  OnHome()
  {
    this.router.navigate(['admin'])
  }
}
