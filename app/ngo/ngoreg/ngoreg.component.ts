import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNull } from 'util';

@Component({
  selector: 'app-ngoreg',
  templateUrl: './ngoreg.component.html',
  styleUrls: ['./ngoreg.component.css']
})
export class NgoregComponent implements OnInit {

  ngo={name:"",email:"",phoneno:"",city:"",state:"",country:"",password:"",
  ngoname:"",ngocity:"",ngostate:"",ngocountry:"",ngophoneno:""}
  a:any;
  constructor(private router:Router,
              private service:DataService) { }

  ngOnInit() {
  }

  onRegister()
  {
    let observableResult=this.service.AddNgo(this.ngo);
    observableResult.subscribe((result)=>{
      this.a=result;
      if(!isNull(this.a))
      {
        alert('registration successful');
        this.router.navigate(['/ngo']);
      }
      else
      {
        alert('registration unsuccessful');
      }
    })
  }
}
