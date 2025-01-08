import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addAdmin(user: any) {
    console.log("Admin")
    console.log(user)
    this.http.post('http://localhost:4500/admin', user).subscribe((data: any) => {
      console.log("Data           " + data);
    })
  }
}
