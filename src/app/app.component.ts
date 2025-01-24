import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RoleService } from './role.service';
import { NavstudentComponent } from './navstudent/navstudent.component';
import { NavadminComponent } from './navadmin/navadmin.component';
import { UserService } from './user.service';
import * as CryptoJS from 'crypto-js';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, HttpClientModule,NavstudentComponent,NavadminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'website';
  role: any;

  // httpClient = inject(HttpClient);
  // data : any[] = [];
  // constructor(private roleService: RoleService) {}
  // ngOnInit(): void {
  //   // throw new Error('Method not implemented.');
  //   this.fetchData();
  // }

  
  // fetchData(){
  //   this.roleService.fetchData().subscribe((data : any[])=>{
  //     // console.log(data);
  //     this.data = data;
  //   });
  // }
    
  userService = inject(UserService);
  roleService = inject(RoleService);
  ngOnInit(){
    const accessToken = document.cookie.split(';').find(c => c.trim().startsWith('accessToken='))?.split('=')[1] ?? '';
    const refreshToken = document.cookie.split(';').find(c => c.trim().startsWith('refreshToken='))?.split('=')[1] ?? '';
    let getRole;
    try {
      getRole = jwtDecode(accessToken);
    } catch (error) {
      console.log('Invalid access token');
    }
    if(getRole && 'role' in getRole){
      this.role = getRole.role;
    }
    if (accessToken && refreshToken && this.role) {
      this.userService.validateUser(accessToken, refreshToken, this.role).subscribe((data: any) => {
        if (data && data.success==true) {
          if(this.role === "3"){
            document.getElementById('nav-1')?.classList.add('hidden');
            document.getElementById('nav-2')?.classList.remove('hidden');
            document.getElementById('nav-3')?.classList.add('hidden');
          }
          else if(this.role === "1" || this.role === "2"){
            document.getElementById('nav-1')?.classList.add('hidden');
            document.getElementById('nav-2')?.classList.add('hidden');
            document.getElementById('nav-3')?.classList.remove('hidden');
          }
          else {
            document.getElementById('nav-1')?.classList.remove('hidden');
            document.getElementById('nav-2')?.classList.add('hidden');
            document.getElementById('nav-3')?.classList.add('hidden');
          }
        } 
      });
    } else {
      this.userService.validateUser(accessToken, refreshToken, this.role).subscribe((data: any) => {
        if (data && data.success==false) {
          document.getElementById('nav-1')?.classList.remove('hidden');
          document.getElementById('nav-2')?.classList.add('hidden');
          document.getElementById('nav-3')?.classList.add('hidden');
        }
      });
    }
  }
}

