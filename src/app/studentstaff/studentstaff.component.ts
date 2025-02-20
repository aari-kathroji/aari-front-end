import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-studentstaff',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studentstaff.component.html',
  styleUrl: './studentstaff.component.css'
})
export class StudentstaffComponent {
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
  }
}
