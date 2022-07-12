import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { address } from '../models/address.class';
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

  postAddress(addAddress: any): Observable<any>{
    let loginToken: loginToken = JSON.parse(localStorage.getItem('loginToken'));
    let token = loginToken.data.accessToken;

    let header = new HttpHeaders().set('Authorization', 'bearer ' + token);

    return this._http.post<any>(this.API, addAddress, {headers: header});
  }

  putAddress(chooseAddress: address): Observable<address>{
    let loginToken: loginToken = JSON.parse(localStorage.getItem('loginToken'));
    let token = loginToken.data.accessToken;

    let header = new HttpHeaders().set('Authorization', 'bearer ' + token);

    return this._http.put<address>(`${this.API}/${chooseAddress._id}`, chooseAddress, {headers: header});
  }

  deleteAddress(chooseAddress: address): Observable<address>{
    let loginToken: loginToken = JSON.parse(localStorage.getItem('loginToken'));
    let token = loginToken.data.accessToken;

    let header = new HttpHeaders().set('Authorization', 'bearer ' + token);

    return this._http.delete<address>(`${this.API}/${chooseAddress._id}`, {headers: header});
  }
}