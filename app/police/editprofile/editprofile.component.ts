import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNull } from 'util';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  user={name:"",email:"",password:"",city:"",country:"",state:"",phoneno:""};
  a:any;

  constructor(private router:Router,
              private service:DataService) { }

  ngOnInit() {
    this.user.name=localStorage.getItem('name');
    this.user.email=localStorage.getItem('email')
    this.user.city=localStorage.getItem('city')
    this.user.state=localStorage.getItem('state')
    this.user.country=localStorage.getItem('country')
    this.user.phoneno=localStorage.getItem('phno')
    this.user.password=localStorage.getItem('pass')
  }

  OnSave()
  {
    debugger;
    this.a=localStorage.getItem("id");
    let observableResult=this.service.EditPolice(this.a,this.user);
    observableResult.subscribe((result)=>{
      if(!isNull(result))
      {
        alert('profile updated');
        this.router.navigate(['/police'])
      }
      else
      {
        alert('updation failed');
        this.router.navigate(['/police'])
      }
    })
  }
}
