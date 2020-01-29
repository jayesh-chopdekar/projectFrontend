import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNull } from 'util';

@Component({
  selector: 'app-ngoinbox',
  templateUrl: './ngoinbox.component.html',
  styleUrls: ['./ngoinbox.component.css']
})
export class NgoinboxComponent implements OnInit {
  mesglist:any;
  a:any;

  constructor(private router:Router,
              private service:DataService) { }

  ngOnInit() 
  {
    this.a=localStorage.getItem("id");
    let observableResult=this.service.Inbox(this.a);
    observableResult.subscribe((result)=>{
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
    this.router.navigate(['/ngo'])
  }

}
