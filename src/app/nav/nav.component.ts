import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  actived : number | null = null;

  buttonClicked(btn : number) : void {
    this.actived = btn;
  }
  ngOnInit() {
    if(localStorage.getItem('user')==='user'){
      document.getElementById('bar-1')?.classList.remove('hidden');
      document.getElementById('bar-2')?.classList.add('hidden');
      document.getElementById('bar-3')?.classList.add('hidden');
    }
    else if(localStorage.getItem('user') === 'student'){
      document.getElementById('bar-2')?.classList.remove('hidden');
      document.getElementById('bar-3')?.classList.add('hidden');
      document.getElementById('bar-1')?.classList.add('hidden');
    }
    else if (localStorage.getItem('user') === 'admin'){
      document.getElementById('bar-3')?.classList.remove('hidden');
      document.getElementById('bar-2')?.classList.add('hidden');
      document.getElementById('bar-1')?.classList.add('hidden');
    }
    else{
      document.getElementById('bar-1')?.classList.remove('hidden');
      document.getElementById('bar-2')?.classList.add('hidden');
      document.getElementById('bar-3')?.classList.add('hidden');
    }
  }

}
