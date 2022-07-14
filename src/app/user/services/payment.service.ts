import { Injectable } from '@angular/core';
import { listPM } from '../models/listPM.class';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginToken } from '../models/login-token.class';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  API1: string = 'https://phongvu-api.herokuapp.com/api/v1/users/me/payment-methods';

  constructor(private _http: HttpClient) { }

  getListPM(): Observable<listPM>{
    let loginToken: loginToken = JSON.parse(localStorage.getItem('loginToken'));
    let token = loginToken.data.accessToken;

    let header = new HttpHeaders().set('Authorization', 'bearer ' + token);

    return this._http.get<listPM>(this.API1, {headers: header});
  }

  postPM(): Observable<any>{
    let loginToken: loginToken = JSON.parse(localStorage.getItem('loginToken'));
    let token = loginToken.data.accessToken;

    let header = new HttpHeaders().set('Authorization', 'bearer ' + token);

    return this._http.post<any>(this.API1, '', {headers: header});
  }

  deletePM(id: any): Observable<any>{
    let loginToken: loginToken = JSON.parse(localStorage.getItem('loginToken'));
    let token = loginToken.data.accessToken;

    let header = new HttpHeaders().set('Authorization', 'bearer ' + token);

    return this._http.delete<any>(`${this.API1}/${id}`, {headers: header});
  }
}
