import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNull } from 'util';

@Component({
  selector: 'app-policeinbox',
  templateUrl: './policeinbox.component.html',
  styleUrls: ['./policeinbox.component.css']
})
export class PoliceinboxComponent implements OnInit {
  mesglist:any;
  a:any;
  constructor(private router:Router,
              private service:DataService) { }

  ngOnInit() 
  {
    debugger;
    this.a=localStorage.getItem("id");
    let observableResult=this.service.Inbox(this.a);
    observableResult.subscribe((result)=>{
      debugger;
      if(!isNull(result))
      {
        this.mesglist=result;
      }
      else
      {
        alert('Inbox empty');
      }
    })

  }
  OnHome()
  {
    this.router.navigate(['/police'])
  }

}
