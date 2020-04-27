import { observable, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products= [
    {Id: 1, ProdName: "Hello", Price: 250, Image:"asdd"},
    {Id: 2, ProdName: "Hello", Price: 250, Image:"asdd"},
    {Id: 3, ProdName: "Hello", Price: 250, Image:"asdd"},
  ];
  constructor() { }

  ngOnInit(): void {
    console.log("start");
    this.getProductData();
    console.log("end");
  }

  getProductData(){
    //this.products = this.prod.getAllProduct();
    // this.prod.getAllProduct().subscribe((res: Product[])=> {
    //   console.log(res);
    //   this.products = res;
    // });
  }

}
