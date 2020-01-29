import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNull } from 'util';

@Component({
  selector: 'app-adusersearch',
  templateUrl: './adusersearch.component.html',
  styleUrls: ['./adusersearch.component.css']
})
export class AdusersearchComponent implements OnInit {

  uname:any;
  userlist:any;
  constructor(private router:Router,
              private service:DataService) { }

  ngOnInit() {
  }
  OnSearch()
  {
    let observableResult=this.service.SearchUser(this.uname);
    observableResult.subscribe((result)=>{
      console.log(result);
      if(isNull(result))
      {
        alert('not found');
      }
      else
      {
        
        this.userlist=result;
      }
    })
  }
  OnHome()
  {
    this.router.navigate(['/admin']);
  }
}
