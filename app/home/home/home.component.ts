import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

credentials={
  email:"",password:""
}

    
  message;
  constructor(private authService:AuthService,
    private router: Router) { }
  ngOnInit() {
  }

  SignIn() {
    debugger;
   // let dbuser = this.authService. CheckCredentialsWithDB(this.user);
   if (this.credentials.email.length == 0) 
   {
    alert('enter email');
    }
   else if (this.credentials.password.length ==0)
    {
     alert('enter password');
    } 
    else 
    {
    this.authService.CheckCredentialsWithDB(this.credentials);
    }
  }

  RegisterAsPolice()
   {
    console.log("inside police register");

    this.router.navigate(['/policereg']);
  }

  RegisterAsNgo()
   {
    console.log("inside ngo register");

    this.router.navigate(['/ngoreg']);
  }
}
