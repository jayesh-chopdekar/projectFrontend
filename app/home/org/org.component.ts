import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  Home()
  {
    this.router.navigate(['home'])
  }
}
