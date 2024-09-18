import { Injectable, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoleService {

  httpClient = inject(HttpClient);
  data : any[] = [];

  // constructor(private httpClient : HttpClient) { }

  fetchData() : Observable<any[]>{
    // this.httpClient.get('http://localhost:4500/role').subscribe((data : any)=>{
    //   console.log(data);
    //   //this.data = data;
    //   return data;
    // })
    return this.httpClient.get<any[]>('http://localhost:4500/role');
  }
}
