import { Injectable } from '@angular/core';

import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router:Router,
              private service:DataService) { }
    use :any;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    debugger;
   if(this.IsLoggedIn())
   {
     console.log("User Has Logged in");
     return true;
   }
   else
   {
    console.log("User has not logged");
     this.router.navigate(['/home']);
     return false;  
   }
  }

  IsLoggedIn()
  {
    
    if(window.sessionStorage.getItem("isActive")!=null 
        && 
       window.sessionStorage.getItem("isActive")=="1")
    {
      // some logic to check if person has logged in
      return true;
    }
    else{
      return false;
    }
  }

  CheckCredentialsWithDB(credentials)
  {
    debugger;
    //Call Some  Service using Post Method
    //to check credentials with DB 
    let observableResult=this.service.Validate(credentials);
    observableResult.subscribe((result)=>{
      this.use=result;
      if(this.use!=null)
      {
        if(this.use.role=="ADMIN" && this.use.ver=="V")
        {
          window.sessionStorage.setItem("isActive", "1");
          localStorage.setItem("id",this.use.id);
          localStorage.setItem('name',this.use.name)
          localStorage.setItem('email',this.use.email)
          localStorage.setItem('pass',this.use.password)
          localStorage.setItem('city',this.use.city)
          localStorage.setItem('state',this.use.state)
          localStorage.setItem('country',this.use.country)
          localStorage.setItem('phno',this.use.phoneno)
          this.router.navigate(['/admin'])
        }
        else if(this.use.role=="POLICE" && this.use.ver=="V")
        {
          window.sessionStorage.setItem("isActive", "1");
          localStorage.setItem("id",this.use.id);
          localStorage.setItem('name',this.use.name)
          localStorage.setItem('email',this.use.email)
          localStorage.setItem('pass',this.use.password)
          localStorage.setItem('city',this.use.city)
          localStorage.setItem('state',this.use.state)
          localStorage.setItem('country',this.use.country)
          localStorage.setItem('phno',this.use.phoneno)
          this.router.navigate(['/police'])
        }
        else if(this.use.role=="NGO" && this.use.ver=="V")
      {
        window.sessionStorage.setItem("isActive", "1");
        localStorage.setItem("id",this.use.id);
        localStorage.setItem('name',this.use.name)
        localStorage.setItem('email',this.use.email)
        localStorage.setItem('pass',this.use.password)
        localStorage.setItem('city',this.use.city)
        localStorage.setItem('state',this.use.state)
        localStorage.setItem('country',this.use.country)
        localStorage.setItem('phno',this.use.phoneno)
        this.router.navigate(['/ngo'])
      }
      else
      {
      this.router.navigate(['/home'])
      }
    }
    else
    {
      alert("invalid login");
    }
    })
      }

  Logout()
  {
    window.sessionStorage.setItem("isActive", "0");
    this.router.navigate(['/home']);
  }
}
