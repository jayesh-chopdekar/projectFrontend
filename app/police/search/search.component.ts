import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { observable } from 'rxjs';
import { isNull } from 'util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
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
        this.router.navigate(['/police']);
      }
      
    })
  }
  OnHome()
  {
    this.router.navigate(['/police']);
  }
}
