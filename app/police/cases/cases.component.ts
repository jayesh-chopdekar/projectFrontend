import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { isNull } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {

  userlist={vId:"",name:"",height:"",age:"",image:""}
  a:any;
  constructor(private service:DataService,
              private router:Router) { }

  ngOnInit() 
  {
    debugger;
    let observableResult=this.service.ShowCases();
    observableResult.subscribe((result)=>{
      this.a=result;
      if(!isNull(this.a))
      {
        this.userlist=this.a;
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
}
