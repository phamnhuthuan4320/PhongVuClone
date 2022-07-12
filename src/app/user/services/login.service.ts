import { Injectable } from '@angular/core';
import { loginToken } from '../models/login-token.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = 'https://phongvu-api.herokuapp.com/api/v1/auth/login';
  APIforgot: string = 'https://phongvu-api.herokuapp.com/api/v1/auth/forgot-password';
  APIreset: string = 'https://phongvu-api.herokuapp.com/api/v1/auth/reset-password';

  constructor(private _http: HttpClient) {}

  postUser(account: {}): Observable<loginToken>{
    return this._http.post<loginToken>(this.API, account);
  }

  postForgot(email: any): Observable<any>{
    return this._http.post<any>(this.APIforgot, email);
  }

  postResetPass(body: any): Observable<any>{
    return this._http.post<any>(this.APIreset, body);
  }


}
