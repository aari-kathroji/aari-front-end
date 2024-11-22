import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet, Router} from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-info',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterLink,RouterModule],
  templateUrl: './edit-info.component.html',
  styleUrl: './edit-info.component.css'
})
export class EditInfoComponent {
  editForm : any
  constructor(private userService: UserService, private router: RouterOutlet,private fb : FormBuilder,private router1 : Router) { }
  ngOnInit(){
    let id = this.router.activatedRoute.snapshot.paramMap.get('_id');
    this.userService.getSingleUser(id).subscribe((data)=>{
      console.log(data)
      this.editForm = this.fb.group(data);
    })
  }

  onUpdate() {
    let id = this.router.activatedRoute.snapshot.paramMap.get('_id');
    if (confirm("Are you sure you want to update?")) {
      this.userService.updateUser(id, this.editForm.value).subscribe((data: any) => {
      });
      this.router1.navigate(['admin-view-students']);
    }
  }

  onDelete(){
    let id = this.router.activatedRoute.snapshot.paramMap.get('_id');
    if (confirm("Are you sure you want to delete?")) {
      this.userService.deleteUser(id).subscribe((data: any) => {
      });
      this.router1.navigate(['admin-view-students']);
    }
  }

}
