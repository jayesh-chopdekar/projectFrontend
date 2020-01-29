import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-policehome',
  templateUrl: './policehome.component.html',
  styleUrls: ['./policehome.component.css']
})
export class PolicehomeComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }
  logout()
  {
    this.authservice.Logout();
  }
}
