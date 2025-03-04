import { Component } from '@angular/core';
import { TechService } from '../tech.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BatchService } from '../batch.service';
import { StaffService } from '../staff.service';
import { ProgramService } from '../program.service';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-adminprogram',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule,RouterLink,RouterModule,RouterOutlet],
  templateUrl: './adminprogram.component.html',
  styleUrl: './adminprogram.component.css'
})
export class AdminprogramComponent {
  programForm :any;

  constructor(private programService:ProgramService){}

  ngOnInit(){
    this.programService.getAllPrograms().subscribe(data=>{
      this.programForm=data
      console.log(this.programForm)
    })
  }
  deleteProgram(id:string){
    if (confirm('Are you sure you want to delete it?')) {
      this.programService.deleteProgram(id).subscribe(data=>{});
      setInterval(() => {window.location.href='/admin-program'},1000);
    }
    
  }

}
