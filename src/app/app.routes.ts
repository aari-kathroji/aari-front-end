import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BatchComponent } from './batch/batch.component';
import { StaffComponent } from './staff/staff.component';
import { CourseComponent } from './course/course.component';
import { AdminstaffComponent } from './adminstaff/adminstaff.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo : 'home',
        pathMatch: 'full'

    },
    {
        path : 'home', component : HomeComponent
    },
    {
        path : 'course', component : CourseComponent
    },
    {
        path : 'batch', component : BatchComponent
    },
    {
        path : 'staff', component : StaffComponent
    },
    {
        path : 'about', component : AboutComponent
    },
    {
        path : 'contact', component : ContactComponent
    },
    {
        path : 'adminStaff', component : AdminstaffComponent
    }

];
