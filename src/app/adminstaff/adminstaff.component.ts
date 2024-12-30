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
  adminRegister: FormGroup;
  checkBoxValue: boolean = false;

  constructor(private router: Router, private userService: UserService) {
    this.adminRegister = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      userName: new FormControl(""),
      role: new FormControl(""),
      gender: new FormControl(""),
      contact: new FormControl("")
    });
  }

  onCheckboxChange(event: any) {
    this.checkBoxValue = event.target.checked;
  }

  onSubmit() {
    if (this.checkBoxValue) {
      console.log(this.adminRegister.value);
      this.userService.addUser(this.adminRegister.value);
      this.router.navigate(['/login']);
    } else {
      alert("Please accept terms and conditions");
    }
  }

  viewStudents() {
    window.location.href = '/admin-view-students';
  }
}
