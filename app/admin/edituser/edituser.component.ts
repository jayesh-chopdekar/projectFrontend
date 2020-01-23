import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNull } from 'util';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  user:{name:"",email:"",password:"",city:"",country:"",state:"",phoneno:""};
  a:any;

  constructor(private router:Router,
              private service:DataService) { }

  ngOnInit() {
  }

  OnSave()
  {
    debugger;
    let observableResult=this.service.EditUser(localStorage.getItem("userid"),this.user);
    observableResult.subscribe((result)=>{
      this.a=result
      if(!isNull(this.a))
      {
        alert('profile updated');
        this.router.navigate(['/users'])
      }
      else
      {
        alert('updation failed');
      }
    })
  }
}
