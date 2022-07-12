import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  API:string = 'https://phongvu-api.herokuapp.com/api/v1/auth/register'

  constructor(private _http: HttpClient) { }

  postAccount(account: user): Observable<user>{
    return this._http.post<user>(this.API, account);
  }
}
