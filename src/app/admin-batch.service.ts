import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminBatchService {

  constructor(private http: HttpClient) { }

  getBatch(){
    return this.http.get('http://localhost:4500/')
  }
  getBatch7PM(){
    return this.http.get('http://localhost:4500/')
  }
  getBatch8PM(){
    return this.http.get('http://localhost:4500/')
  }
}
