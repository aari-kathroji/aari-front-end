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
    return this.http.get('http://localhost:4500/user/'+ _id)
  }

  getStudents(){
    return this.http.get('http://localhost:4500/user/viewStudents')
  }
  loginUser(user: any) {
    console.log("User           " + user)
    return this.http.post('http://localhost:4500/user/login', user)
  }
  updateUser(_id: any,user: any) {
    console.log("User           " + user)
    return this.http.put('http://localhost:4500/user/'+ _id, user)
    
  }
  deleteUser(_id: any) {
    console.log("User           " + _id)
    return this.http.delete('http://localhost:4500/user/'+ _id)
  }
}
