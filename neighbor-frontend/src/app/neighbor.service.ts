import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NeighborService {

  private baseUrl = 'http://localhost:8080/api/neighbors';

  constructor(private http: HttpClient) { }

  getNeighbor(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createNeighbor(neighbor: Object): Observable<Object> {
    return this.http.get(`${this.baseUrl}` + '/create', neighbor);
  }

  updateNeighbor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteNeighbor(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType : 'text'});
  }

  getNeighborsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getNeighborByAge(age: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/age/${age}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, {responseType: 'text'});
  }

}
