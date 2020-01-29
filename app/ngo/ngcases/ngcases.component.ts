import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';
import { isNull } from 'util';

@Component({
  selector: 'app-ngcases',
  templateUrl: './ngcases.component.html',
  styleUrls: ['./ngcases.component.css']
})
export class NgcasesComponent implements OnInit {

  userlist:any;
  constructor(private service:DataService,
              private router:Router) { }

  ngOnInit() {
    let observableResult=this.service.ShowCases();
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
    this.router.navigate(['ngo'])
  }
}
