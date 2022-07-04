import { Injectable } from '@angular/core';
import { categories } from './categories.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  API: string = 'https://phongvu-api.herokuapp.com/api/v1/categories';

  constructor(public _http: HttpClient) { }

  getCategories(): Observable<categories>{
    return this._http.get<categories>(this.API);
  }
}
