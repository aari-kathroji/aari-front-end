import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navadmin',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './navadmin.component.html',
  styleUrl: './navadmin.component.css'
})
export class NavadminComponent {
  actived : number | null = null;
  role:any;
  constructor(private router : Router){}
  buttonClicked(btn : number) : void {
    this.actived = btn;
  }

  logout(){
    document.cookie.split(';').forEach(cookie => {
      document.cookie = cookie.trim().split('=')[0] + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    });
    window.location.href = '/login';
  }

}
