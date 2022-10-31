import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(url: string, params: Object = {}): Observable<any> {
    const path: string = this.getPath(params);
    return this.http.get<any>(`${environment.base_url}${url}` + (path ? '?' + path : ''), { headers: { 'Accept': 'application/json' } });
  }


  getPath(params: Object = {}): string {
    return Object.keys(params).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
    }).join('&');
  }
}