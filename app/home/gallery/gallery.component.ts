import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { isNull } from 'util';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
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
        this.router.navigate(['home'])
      }
    })
  
  }
  OnHome()
  {
    this.router.navigate(['home'])
  }

}
