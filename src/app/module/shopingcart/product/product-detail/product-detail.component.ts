// import { ProductService } from '../product.service';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  id = null;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      param => this.id = param.get('id') 
    );
    //this.product = this.prod.getProduct(this.id);
  }

  // getProductDetail()
  // {
  //   this.prod.getProductDetails(this.id).subscribe(data => {
  //     this.product = data;
  //     console.log(data);
  //   });
  // }
}
