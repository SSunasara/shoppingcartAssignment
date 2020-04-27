import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "sun@gmail.com";
  pass="sunasara123";

  emailerror: string;
  passerror: string;
  loginData = null;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  login(){
    if(this.validate())
    {
      if(!(this.auth.login(this.email, this.pass))){
        console.log("Invalid Email or password");
      } 
      else{
        console.log("Login success");
        const redirectUrl = '/product/list';
        this.router.navigate([redirectUrl]);
      }     
    }
  }

  res:boolean;

  validate(): boolean{
    this.res = true;
    if(this.email == ""){
      this.emailerror = "email is required";
      this.res = false;
    }      
    else{
      this.emailerror = null;
    }

    if(this.pass == ""){
      this.passerror = "Password is required";
      this.res = false;
    }      
    else{
      this.passerror = null;
    }

    return this.res;
  }
}
