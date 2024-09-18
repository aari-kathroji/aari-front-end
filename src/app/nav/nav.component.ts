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

}
