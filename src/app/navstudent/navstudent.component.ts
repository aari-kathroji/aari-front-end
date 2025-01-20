import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

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
  constructor(private router : Router){}
  buttonClicked(btn : number) : void {
    this.actived = btn;
  }
  logout(){
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/login';
  }

}
