import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNull } from 'util';

@Component({
  selector: 'app-ngosearch',
  templateUrl: './ngosearch.component.html',
  styleUrls: ['./ngosearch.component.css']
})
export class NgosearchComponent implements OnInit {

  vname:any;
  userlist:any;
  
  constructor(private router:Router,
              private service:DataService) { }

  ngOnInit() {
  }
  onSearch()
  {
    debugger;
    let observable=this.service.Search(this.vname);
    observable.subscribe((result)=>{
      this.userlist=result;
      if(isNull(this.userlist))
      {
        alert('unsuccessful');
        this.router.navigate(['/ngo']);
      }
    })
  }
  OnHome()
  {
    this.router.navigate(['/ngo']);
  }

}
