import { Product } from './../interfaces/product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  
  constructor(private http: HttpClient) { }

  headerOption = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  private handleError(error: any) {
    console.error(`%c Error occured ${error}`, 'color: red');
    return throwError(error);
  }
  
  product: Product;
  baseURL = 'http://localhost:3000/';

  addProduct(item: Product): Observable<Product>{
    console.log("Add");
    return this.http.post<Product>(this.baseURL + "Products", item, this.headerOption);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL + "Products", this.headerOption).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getProductDetails(id: number): Observable<Product> {
    return this.http.get<Product>(this.baseURL + "Products" + `/${id}`, this.headerOption).pipe(
      tap(),
      catchError(this.handleError)
    );
  }
}
