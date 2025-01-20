import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor() { }

  ngOnInit(): void {
    if (!document.cookie.includes('role') || !document.cookie.includes('accessToken') || !document.cookie.includes('refreshToken')) {
      document.querySelector('.for-login')?.classList.add('hidden');
    }
  }
}
