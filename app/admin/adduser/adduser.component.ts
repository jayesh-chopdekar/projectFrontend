import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNull } from 'util';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  user={name:"",email:"",password:"",city:"",country:"",state:"",phoneno:"",role:""};
  a:any;
  constructor( private router:Router,
              private service:DataService) { }

  ngOnInit() {
  }
  onRegister()
  {
    debugger;
   let observableResult=this.service.AddUser(this.user)
   observableResult.subscribe((result)=>{
    this.a=result;
    if(isNull(this.a))
    {
      alert('unsuccessful');
    }
    else
    {
      alert('successful');
      this.router.navigate(['/admin']);
    }
   })
  }
}
