import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
      login : FormGroup ;

      isFormSubmmited : boolean = false;

      constructor(){
        this.login = new FormGroup({
          userName : new FormControl("",[Validators.required, Validators.minLength(5)]),
          password : new FormControl("",[Validators.required, Validators.minLength(6), this.passwordValidation])
        })
      }

      passwordValidation(control : FormControl): {[s : string] : boolean} | null{
        if(/\s/.test(control.value) || /[!@#$%^&*(),.?":{}|<>]/.test(control.value)){
          return {'InvalidPassword' : true}
        }
        return null;
      }

      onSubmit(){
        const isFormValid = this.login.valid;
        this.isFormSubmmited = true;
      }
}
