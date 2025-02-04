import { Component } from '@angular/core';
import { BatchService } from '../../services/batch.service';

@Component({
  selector: 'app-adminbatch',
  standalone: true,
  imports: [],
  templateUrl: './adminbatch.component.html',
  styleUrl: './adminbatch.component.css'
})
export class AdminbatchComponent {
constructor(private batchService : BatchService){ 
  
}
getBatch(number: string) {
  // if(number == 1){
  //   console.log("1");
  // }else if(number == 2){
  //   console.log("2");
  // }
  // else if(number == 3){
  //   console.log("3");
  // }
  console.log(number);
}
}
