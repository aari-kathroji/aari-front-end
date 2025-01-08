import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { UserService } from '../user.service';
import { ScrollAnimateDirective } from '../scroll-animate.directive';

@Component({
  selector: 'app-adminstaff',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterLink,
    RouterModule,
    ScrollAnimateDirective
  ],
  templateUrl: './adminstaff.component.html',
  styleUrls: ['./adminstaff.component.css'],
})
export class AdminstaffComponent {
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
