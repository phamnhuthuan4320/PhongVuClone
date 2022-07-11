import { Injectable } from '@angular/core';
import { loginToken } from '../models/login-token.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = 'https://phongvu-api.herokuapp.com/api/v1/auth/login';

  constructor(private _http: HttpClient) {}

  postUser(account: {}): Observable<loginToken>{
    return this._http.post<loginToken>(this.API, account);
  }
}
