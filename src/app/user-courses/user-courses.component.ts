import { Component } from '@angular/core';
import {MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-user-courses',
  standalone: true,
  imports: [MatDialogModule,UserProfileComponent,MatExpansionModule],
  templateUrl: './user-courses.component.html',
  styleUrl: './user-courses.component.css'
})
export class UserCoursesComponent {
  panelOpenState=false;
 
}
