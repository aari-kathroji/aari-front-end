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
  getSingleUser(_id: any) {
    return this.http.get('http://localhost:4500/user/' + _id)
  }

  getStudents() {
    return this.http.get('http://localhost:4500/user/viewStudents')
  }
  getTeachers() {
    return this.http.get('http://localhost:4500/user/viewTeachers')
  }
  loginUser(user: any) {
    console.log("User           " + user)
    return this.http.post('http://localhost:4500/login', user)
  }
  updateUser(_id: any, user: any) {
    console.log("User           " + user)
    return this.http.put('http://localhost:4500/user/' + _id, user)

  }
  deleteUser(_id: any) {
    console.log("User           " + _id)
    return this.http.delete('http://localhost:4500/user/' + _id)
  }
  validateUser(accessToken: any, refreshToken: any) {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json', // Set Content-Type header
    //   'Authorization': 'Bearer your-jwt-token', // Set Authorization header (e.g., JWT token)
    //   'Custom-Header': 'some-value'  // Custom header
    // });
    // this.http.post('http://localhost:4500/auth', { headers: headers }).subscribe((data: any) => {
    //   console.log("Data           " + data);
    // })
    // return true
    let flag: boolean=false;

    this.http.post('http://localhost:4500/auth', { accessToken: accessToken, refreshToken: refreshToken }).subscribe((data: any) => {
      const resmsg = data;
      console.log("resmsg " + resmsg);
      if (resmsg && resmsg.success === true) {
        flag = true;
      }
    })
    return flag


  }
}
