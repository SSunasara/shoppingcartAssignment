import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;
  data= null;

  UserData = [
    {cid:1, name:'Sunasara', email:'sun@gmail.com', password:'sunasara123'},
    {cid:2, name:'SajidAli', email:'sajid@gmail.com', password:'sunasara123'},
  ];
  constructor() { }

  // getUserData(): Observable<any> {
  //  return this.http.get<any>('./assets/json/user.json');
  // }

  // login(logingemail: string, loginpassword: string): boolean{
  //   this.getUserData().subscribe((res )=> {
  //     this.UserData = res;
  //     this.data =  this.UserData.find( ({ email }) => email == logingemail);
  //     console.log(this.data);
  //     if(this.data != null)
  //     {
  //       if(this.data["password"] == loginpassword )
  //       {
  //         console.log(this.isLoggedIn);
  //         this.isLoggedIn = true;
  //         console.log(this.isLoggedIn);
  //       }        
  //       return this.isLoggedIn;
  //     }      
  //   });
    //console.log("las " + this.isLoggedIn);
    //return this.isLoggedIn;   
  // }

  login(logingemail: string, loginpassword: string){
    this.data =  this.UserData.find( ({ email }) => email == logingemail);
      console.log(this.data);
      if(this.data != null)
      {
        if(this.data["password"] == loginpassword )
        {
          console.log(this.isLoggedIn);
          this.isLoggedIn = true;
          console.log(this.isLoggedIn);
        }                
      }      
    return this.isLoggedIn;
  }
}
