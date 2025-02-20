import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  constructor(private http:HttpClient) { }

  getBatchs(){
    return this.http.get('http://localhost:4500/batch');
  }
}
