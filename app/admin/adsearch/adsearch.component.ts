import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNull } from 'util';

@Component({
  selector: 'app-adsearch',
  templateUrl: './adsearch.component.html',
  styleUrls: ['./adsearch.component.css']
})
export class AdsearchComponent implements OnInit {

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
        this.router.navigate(['/admin']);
      }
    })
  }
  OnHome()
  {
    this.router.navigate(['/admin']);
  }

}
