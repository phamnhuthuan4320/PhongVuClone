import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginToken } from '../models/login-token.class';
import { orders } from '../models/orders.class';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  API: string = 'https://phongvu-api.herokuapp.com/api/v1/orders'

  constructor(private _http: HttpClient) { }

  postOrder(order: any): Observable<any>{
    let loginToken: loginToken = JSON.parse(localStorage.getItem('loginToken'));
    let token = loginToken.data.accessToken;

    let header = new HttpHeaders().set('Authorization', 'bearer ' + token);

    return this._http.post<any>(this.API, order, {headers: header});
  }

  getOrders(): Observable<orders>{
    let loginToken: loginToken = JSON.parse(localStorage.getItem('loginToken'));
    let token = loginToken.data.accessToken;

    let header = new HttpHeaders().set('Authorization', 'bearer ' + token);

    return this._http.get<orders>(this.API, {headers: header});
  }
}
