import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BatchComponent } from './batch/batch.component';
import { StaffComponent } from './staff/staff.component';
import { CourseComponent } from './course/course.component';
import { AdminstaffComponent } from './adminstaff/adminstaff.component';
import { RegisterComponent } from './register/register.component';
import { StudentcourseComponent } from './studentcourse/studentcourse.component';
import { StudentstaffComponent } from './studentstaff/studentstaff.component';
import { StudentprogramComponent } from './studentprogram/studentprogram.component';
import { AdminprogramComponent } from './adminprogram/adminprogram.component';
import { AdminbatchComponent } from './adminbatch/adminbatch.component';
import { AdminstudentcourseComponent } from './adminstudentcourse/adminstudentcourse.component';
import { AdminViewStudentsComponent } from './admin-view-students/admin-view-students.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { EditInfoComponent } from './edit-info/edit-info.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: "",
        redirectTo : 'login',
        pathMatch: 'full'

    },
    {
        path : 'home', component : HomeComponent, canActivate : [AuthGuard]
    },
    {
        path : 'course', component : CourseComponent
    },
    {
        path:'login',component:LoginComponent
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
    },
    {
        path : 'register', component : RegisterComponent
    },
    {
        path : 'student-course',component : StudentcourseComponent
    },
    {
        path :'student-staff', component : StudentstaffComponent
    }
    ,
    {
        path :'student-program', component : StudentprogramComponent
    },
    {
        path :'admin-program', component : AdminprogramComponent
    },
    {
        path : 'admin-batch', component : AdminbatchComponent
    },
    {
        path : 'admin-student-course', component : AdminstudentcourseComponent
    },
    {
        path: 'admin-view-students',component: AdminViewStudentsComponent
    },
    {
        path: 'singleView/:_id',component: SingleViewComponent
    },
    {
        path: 'edit/:_id',component: EditInfoComponent
    }


];
