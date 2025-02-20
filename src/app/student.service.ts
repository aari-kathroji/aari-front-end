import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getBatch(){
    return this.http.get('http://localhost:4500/student/batch').subscribe((data: any) => {
      console.log(data);
    })
  }


}
