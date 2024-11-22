import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-single-view',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterOutlet,RouterLink,RouterModule],
  templateUrl: './single-view.component.html',
  styleUrl: './single-view.component.css'
})
export class SingleViewComponent {
  student: any;
  constructor(private http: HttpClient,private router: RouterOutlet,private userService:UserService){}
  ngOnInit(){
    let id = this.router.activatedRoute.snapshot.paramMap.get('_id');
    this.userService.getSingleUser(id).subscribe((data)=>{
      this.student = data
    })
  }

  
}
