import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-studentcourse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studentcourse.component.html',
  styleUrl: './studentcourse.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class StudentcourseComponent {
  batch:any;
  constructor(){}
  ngOnInit(){
    const accessToken = document.cookie.split(';').find(c => c.trim().startsWith('accessToken='))?.split('=')[1] ?? '';
    const refreshToken = document.cookie.split(';').find(c => c.trim().startsWith('refreshToken='))?.split('=')[1] ?? '';
    let batchId;
    try{
      batchId=jwtDecode(accessToken)
    }
    catch(error){
      alert("Invalid user is logged in")
    }
    if(batchId && 'batchId' in batchId){
      this.batch=batchId.batchId;
    }
    // if(accessToken && refreshToken && this.batch){
    //   if(this.batch=="67a0deeae5ad3310ec16c924"){

    //   }else if(this.batch=="67a0df37e5ad3310ec16c926"){

    //   }else{

    //   }
    // }
  }

}
