import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNull } from 'util';

@Component({
  selector: 'app-policreg',
  templateUrl: './policreg.component.html',
  styleUrls: ['./policreg.component.css']
})
export class PolicregComponent implements OnInit 
{
  pol={name:"",email:"",phoneno:"",city:"",state:"",country:"",password:"",
  deptname:"",deptcity:"",deptstate:"",deptcountry:"",deptphoneno:""}
  a:any;
  constructor(private router:Router,
              private service:DataService) { }

  ngOnInit() {
  }

  onRegister()
  {
    let observableResult=this.service.AddPolice(this.pol);
    observableResult.subscribe((result)=>{
      this.a=result;
      if(!isNull(this.a))
      {
        alert('registration successful');
        this.router.navigate(['/police'])
      } 
      else
      {
        alert('registration unsuccessful');
      }
    })
  }
}
