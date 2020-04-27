import { ProductService } from './product.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
