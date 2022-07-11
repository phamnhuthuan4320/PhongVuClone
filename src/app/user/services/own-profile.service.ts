import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ownProfile } from '../models/own-profile.class';
import { loginToken } from '../models/login-token.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnProfileService {

  API: string = 'https://phongvu-api.herokuapp.com/api/v1/users/me/profile';

  constructor(private _http: HttpClient) { }

  getOwnProfile(): Observable<ownProfile>{
    let loginToken: loginToken = JSON.parse(localStorage.getItem('loginToken'));
    let token = loginToken.data.accessToken;

    let header = new HttpHeaders().set('Authorization', 'bearer ' + token);

    return this._http.get<ownProfile>(this.API, {headers: header});
  }

  putOwnProfile(ownProfile: ownProfile): Observable<ownProfile>{
    let loginToken: loginToken = JSON.parse(localStorage.getItem('loginToken'));
    let token = loginToken.data.accessToken;

    let header = new HttpHeaders().set('Authorization', 'bearer ' + token);

    return this._http.put<ownProfile>(this.API, ownProfile.data, {headers: header});
  }
}
