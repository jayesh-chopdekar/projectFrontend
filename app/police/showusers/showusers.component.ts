import { Component, OnInit } from '@angular/core';
import { isNull } from 'util';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent implements OnInit {
  userlist:any;
  constructor(private router:Router,
              private service:DataService) { }

  ngOnInit() {
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
  OnHome()
  {
    this.router.navigate(['/police']);
  }
  OnSend(email)
  {
    sessionStorage.setItem('useremail',email)
    this.router.navigate(['polcompose'])
  }
}
