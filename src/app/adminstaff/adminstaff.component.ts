import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterEvent, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adminstaff',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterLink,RouterModule],
  templateUrl:'./adminstaff.component.html',
  styleUrl: './adminstaff.component.css'
})
export class AdminstaffComponent {
  adminRegister:FormGroup
  checkBoxValue: boolean = false;
  isFromSubmitted:boolean=false
  constructor(private router:RouterOutlet,private userService:UserService){
    this.adminRegister = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      userName: new FormControl(""),
      role: new FormControl(""),
      gender: new FormControl(""),
      contact: new FormControl("")
    })
  }
  onCheckboxChange(event: any) {
    if (event.target.checked){
      this.checkBoxValue = true;
    }
    else{
      this.checkBoxValue = false;
    }
  }
  onSubmit(){
    if((this.checkBoxValue==true)){

      console.log(this.adminRegister.value);
      this.userService.addUser(this.adminRegister.value)
      window.location.href = '/admin-view-students'
    }
    else{
      alert("Please accept terms and conditions");
    }
  }

  viewStudents(){
    window.location.href = '/admin-view-students'
  }
}
