import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  CustomerData = [
    {cid:1, name:'Sunasara', email:'sun@gmail.com', password:'sunasara123'},
    {cid:2, name:'SajidAli', email:'sajid@gmail.com', password:'sunasara123'},
  ];
  constructor() { }

  login(logingemail: string, loginpassword: string){
    return this.CustomerData.find( ({ email }) => email == logingemail);
  }

}
