import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule,RouterLink,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
      login : FormGroup ;

      isFormSubmmited : boolean = false;

      constructor(private UserService : UserService){
        this.login = new FormGroup({
          userName : new FormControl("",[Validators.required, Validators.minLength(5)]),
          password : new FormControl("",[Validators.required, Validators.minLength(6), this.passwordValidation]),
          role: new FormControl("student",[Validators.required])
        })
      }

      passwordValidation(control : FormControl): {[s : string] : boolean} | null{
        if(/\s/.test(control.value) || /[!@#$%^&*(),.?":{}|<>]/.test(control.value)){
          return {'InvalidPassword' : true}
        }
        return null;
      }

      validation() {
        if (this.login.value.userName == '' || this.login.value.password == '') {
          alert('Please enter username and password');
          return false;
        }
        return true;
      }
  onSubmit() {
    this.UserService.loginUser(this.login.value).subscribe((data: any) => {
      try {
        console.log("Component", data[0].userName);
        console.log("Component", data[0].role);
        if (!data || Object.keys(data).length === 0) { // Check if object is empty
          alert("Invalid username or password");
        } else {
          localStorage.setItem('user', data[0].userName);
          localStorage.setItem('role', data[0].role);
        }
      }
      catch (error) {
        alert("Invalid username or password");
      }
    });
  }
}
