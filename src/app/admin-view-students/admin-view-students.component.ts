import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-view-students',
  standalone: true,
  imports: [RouterLink,RouterModule,RouterOutlet,CommonModule,ReactiveFormsModule],
  templateUrl: './admin-view-students.component.html',
  styleUrl: './admin-view-students.component.css'
})
export class AdminViewStudentsComponent {
  students: any[] = [];
  constructor(private userService: UserService){}
  ngOnInit(){
    this.userService.getStudents().subscribe((data: any) => {
      this.students = data;
      console.log(this.students);
    })
  }
  deleteStudent(id: any){
    this.userService.deleteUser(id).subscribe((data: any) => {
      this.students = this.students.filter((student) => student._id !== id);
    })
    window.location.reload();
  }
}
