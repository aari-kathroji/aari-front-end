import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //httpClient

  constructor(private http: HttpClient) { }

  addUser(user: any) {
    // const User=JSON.stringify(user);
    console.log("User           " + user)
    // const userJson = JSON.stringify(user);
    // console.log("UserJson       " + userJson)
    this.http.post('http://localhost:4500/user', user).subscribe((data: any) => {
      console.log("Data           " + data);
    })

  }
  loginUser(user: any) {
    console.log("User           " + user)
    return this.http.post('http://localhost:4500/user/login', user)
  }
}
