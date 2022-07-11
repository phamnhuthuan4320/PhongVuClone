import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addresses } from '../models/addresses.class';
import { loginToken } from '../models/login-token.class';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  API: string = 'https://phongvu-api.herokuapp.com/api/v1/users/me/addresses';

  constructor(private _http: HttpClient) { }

  getAddresses(): Observable<addresses>{
    let loginToken: loginToken = JSON.parse(localStorage.getItem('loginToken'));
    let token = loginToken.data.accessToken;

    let header = new HttpHeaders().set('Authorization', 'bearer ' + token);

    return this._http.get<addresses>(this.API, {headers: header});
  }
}