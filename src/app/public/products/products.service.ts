import { Injectable } from '@angular/core';
import { products } from './products.class';
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
}
