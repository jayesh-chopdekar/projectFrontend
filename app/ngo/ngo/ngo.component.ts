import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css']
})
export class NgoComponent implements OnInit {

  constructor(private service:AuthService) { }

  ngOnInit() {
  }
  logout()
  {
    this.service.Logout();
  }
}
