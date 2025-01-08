import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RoleService } from './role.service';
import { NavstudentComponent } from './navstudent/navstudent.component';
import { NavadminComponent } from './navadmin/navadmin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, HttpClientModule,NavstudentComponent,NavadminComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'website';
  role: any;

  // httpClient = inject(HttpClient);
  // data : any[] = [];
  // constructor(private roleService: RoleService) {}
  // ngOnInit(): void {
  //   // throw new Error('Method not implemented.');
  //   this.fetchData();
  // }

  
  // fetchData(){
  //   this.roleService.fetchData().subscribe((data : any[])=>{
  //     // console.log(data);
  //     this.data = data;
  //   });
  // }
    
  ngOnInit(){
    this.role = localStorage.getItem('role');
    if(this.role === 'student'){
      document.getElementById('nav-1')?.classList.add('hidden');
      document.getElementById('nav-2')?.classList.remove('hidden');
      document.getElementById('nav-3')?.classList.add('hidden');
    }
    else if(this.role === 'admin'){
      document.getElementById('nav-1')?.classList.add('hidden');
      document.getElementById('nav-2')?.classList.add('hidden');
      document.getElementById('nav-3')?.classList.remove('hidden');
    }
    else{
      document.getElementById('nav-1')?.classList.remove('hidden');
      document.getElementById('nav-2')?.classList.add('hidden');
      document.getElementById('nav-3')?.classList.add('hidden');
    }
  }
}

