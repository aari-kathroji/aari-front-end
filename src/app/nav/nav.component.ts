import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule , Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  
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
