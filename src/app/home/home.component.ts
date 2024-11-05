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
    if(localStorage.getItem('user') && localStorage.getItem('user') !== ''){
      document.querySelector('.for-login')?.classList.add('hidden');
    }
  }

}
