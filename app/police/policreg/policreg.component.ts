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
  deptName:"",deptcity:"",deptstate:"",deptcountry:"",deptphoneno:""}
  a:any;
  file:any=File;
  constructor(private router:Router,
              private service:DataService) { }

  ngOnInit() {
  }

  onRegister()
  {
    debugger;
    const formData=new FormData();
    formData.append('pol',JSON.stringify(this.pol));
    formData.append('poli',this.file);
    let observableResult=this.service.AddPolice(formData);
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
  OnSelectFile(event)
  {
    this.file=event.target.files[0];

  }
}
