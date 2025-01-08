import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterLink,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    // register: FormGroup;

    // isFormSubmmited: boolean = false;

    // constructor(private userService: UserService, private router: RouterOutlet) {
    //   this.register = new FormGroup({
    //     name: new FormControl("",[Validators.required, Validators.minLength(5)]),
    //     email: new FormControl("",[Validators.required, Validators.minLength(5), Validators.email]),
    //     userName: new FormControl("",[Validators.required, Validators.minLength(5)]),
    //     password: new FormControl("",[Validators.required, Validators.minLength(6)]),
    //     role: new FormControl("student",[Validators.required])
    //   })
    // }

    // onSubmit(){
    //   console.log(typeof(this.register.value));
    //   this.userService.addUser(this.register.value)
    //   window.location.href = '/home'
    // }

    adminRegister:FormGroup
      checkBoxValue: boolean = false;
      isFromSubmitted:boolean=false
      constructor(private router:RouterOutlet,private userService:UserService,private router1:Router){
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
          this.userService.addUser(this.adminRegister.value);
          this.router1.navigate(['/login']);
        }
        else{
          alert("Please accept terms and conditions");
        }
      }
    
      viewStudents(){
        window.location.href = '/login'
      }

}
