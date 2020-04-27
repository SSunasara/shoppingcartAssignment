import { Router } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  item: Product = {id: Math.floor(Math.random() * 10000), Price:"852", ProdName:"Hello", Image:"jhgjh"};;
  constructor(private productService: ProductService, private route: Router) {
    
   }
  //  this.item;
  ngOnInit(): void {
    this.getProductData();
  }

  getProductData(){
    this.productService.getProducts().subscribe((res: Product[]) => 
      {
        this.products = res;
      });
  }

  add(){
    // console.log("Add");
    // this.productService.addProduct(this.item);
    // console.log("get");
    // this.getProductData();
    this.productService.addProduct(this.item).subscribe(data => {
      console.log(data);
      this.getProductData();
    });
    this.route.navigate(['product/list']);
  }
}
