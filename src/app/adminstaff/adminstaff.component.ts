import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterEvent, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AdminService } from '../admin.service';

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
  constructor(private router:RouterOutlet,private adminService:AdminService) {
    this.adminRegister = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      userName: new FormControl(""),
      role: new FormControl("staff"),
      gender: new FormControl(""),
      contact: new FormControl(""),
      address: new FormControl("")
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
      this.adminService.addAdmin(this.adminRegister.value)
    }
    else{
      alert("Please accept terms and conditions");
    }
  }
}
