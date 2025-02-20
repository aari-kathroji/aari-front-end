import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-navstudent',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './navstudent.component.html',
  styleUrl: './navstudent.component.css'
})
export class NavstudentComponent {
  actived : number | null = null;
  role:any;
  showGoodbyeMessage = false;
  logoutTimer: number = 3.0;
  timerInterval: any;
  constructor(private router : Router){}
  buttonClicked(btn : number) : void {
    this.actived = btn;
  }
  logout(){
    this.showGoodbyeMessage = true;
    this.logoutTimer = 3.0;
    
    this.timerInterval = setInterval(() => {
      this.logoutTimer = Math.max(0, this.logoutTimer - 0.1);
      
      if(this.logoutTimer <= 0) {
        clearInterval(this.timerInterval);
        this.performLogout();
      }
    }, 100);
  }

  cancelLogout() {
    clearInterval(this.timerInterval);
    this.showGoodbyeMessage = false;
    this.logoutTimer = 3.0;
  }

  private performLogout() {
    const accessToken = document.cookie.split(';').find(c => c.trim().startsWith('accessToken='))?.split('=')[1] ?? '';
    try {
      const payload = jwtDecode(accessToken);
      if (payload && 'role' in payload) {
        this.role = payload.role;
      }
      if (this.role === '3') {
        document.cookie = 'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'role=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        window.location.href = '/login';
      }
    } catch (error) {
      console.log('Invalid access token');
    }
    this.showGoodbyeMessage = false;
  }
}
