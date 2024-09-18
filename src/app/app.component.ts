import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RoleService } from './role.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'website';

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
    
}

