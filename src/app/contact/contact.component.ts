import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm = new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(5)]),
    email: new FormControl("",[Validators.required, Validators.email]),
    message: new FormControl("",[Validators.required, Validators.minLength(5)])
  });

  constructor() { }
  onSubmit(){
    console.log(this.contactForm.value);
    if(this.contactForm.valid){
      document.getElementById('alert-2')?.classList.add('hidden');
      document.getElementById('alert-1')?.classList.remove('hidden');
    }else{
      document.getElementById('alert-1')?.classList.add('hidden');
      document.getElementById('alert-2')?.classList.remove('hidden');
    }
  }


}
