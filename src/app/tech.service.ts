import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  constructor(private http: HttpClient) { }

  getAllTechs() {
    return this.http.get('http://localhost:4500/techstack');
  }
}
