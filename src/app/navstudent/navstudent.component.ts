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
    localStorage.clear();
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
    this.router.navigate(['/login']);
  }

}
