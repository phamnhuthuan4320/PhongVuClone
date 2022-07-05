import { Injectable } from '@angular/core';
import { products } from '../models/products.class';
import { productDetail } from '../models/productDetail.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API: string = 'https://phongvu-api.herokuapp.com/api/v1/products';

  constructor(public _http: HttpClient) { }

  getProducts(): Observable<products>{
    return this._http.get<products>(this.API);
  }

  getProductsDetail(id: string): Observable<productDetail>{
    return this._http.get<productDetail>(`${this.API}/${id}`);
  }
}
