import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) {
  }
  getAPI(url) {
    return this.http.get(url);
  }

}
