import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNull } from 'util';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userlist:any
  constructor(private router:Router,
              private service:DataService) { }

  ngOnInit() 
  {
    let observableResult=this.service.ShowUsers();
    observableResult.subscribe((result)=>{
      
      if(!isNull(result))
      {
        this.userlist=result;
      }
      else
      {
        alert('unsuccessful');
      }
    })
  }
  OnDelete(id)
  {
    let delOps=this.service.RemUser(id)
    delOps.subscribe((result)=>{
      this.router.navigate(['/users']);
    })
  }
  OnEdit(id)
  {
    localStorage.setItem("userid",id);
    this.router.navigate(['/edituser']);
  }
  OnHome()
  {
    this.router.navigate(['/admin']);
  }
  OnSend(email)
  {
    sessionStorage.setItem("useremail",email)
    this.router.navigate(['adcompose'])
  }
}
