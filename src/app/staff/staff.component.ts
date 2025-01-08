import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ScrollAnimateDirective } from '../scroll-animate.directive';
import { UserService } from '../user.service';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    RouterModule,
    ScrollAnimateDirective
  ],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.css'
})
export class StaffComponent {
  staffs: any[] = [];
    constructor(private router: Router, private userService: UserService) {}
  
    ngOnInit() {
      this.userService.getTeachers().subscribe((data: any) => {
        this.staffs = data;
      })
    }
    viewStudents() {
      window.location.href = '/admin-view-students';
    }

}
