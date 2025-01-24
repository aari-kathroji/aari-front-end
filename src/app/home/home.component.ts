import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../user.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  role:any;
  constructor(private userService: UserService) { }
  
  ngOnInit() {
    const refreshToken = document.cookie.split(';').find(c => c.trim().startsWith('refreshToken='))?.split('=')[1] ?? '';
    const accessToken = document.cookie.split(';').find(c => c.trim().startsWith('accessToken='))?.split('=')[1] ?? '';
    let payload;
    try {
      payload = jwtDecode(accessToken);
    } catch (error) {
      console.log('Invalid access token');
    }
    if (payload && 'role' in payload) {
      this.role = payload.role;
    }
    if (!refreshToken || !accessToken) {
      window.location.href = '/login';
    }
  }
}
