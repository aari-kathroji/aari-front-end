import { Component, Inject } from '@angular/core';
import { BatchService } from '../../services/batch.service';
import { FormsModule } from '@angular/forms';

export class Batch {
  id: string="";
  batch_name: string="";
};


@Component({
  selector: 'app-batches',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './batch.component.html',
  styleUrl: './batch.component.css'
})
export class BatchComponent {

  batch:any = {};
  /*singleBatch:batch;{id:"1",
                        batch_name:"we"
                       };*/

  // singleBatch:Batch;

  // constructor(private batchService: BatchService){}

  // ngOnInit() {
  //   this.batchService.getBatch(18).subscribe(data=>{
  //     //console.log(data);
  //     this.singleBatch = data[0];
  //     console.log("Single Batch" + this.singleBatch)
  //   });
    
  //   /*this.batch = this.batchService.getBatch(2);
  //   this.singleBatch = this.batch[0];
  //   console.log("Super" + this.batch)*/
  // }

 getBatch(value : any){
  if(value=="1"){
    document.querySelector('.points-1')?.classList.add('show');
    document.querySelector('.points-2')?.classList.remove('show');
    document.querySelector('.points-3')?.classList.remove('show');
  }
  if(value=="2"){
    document.querySelector('.points-2')?.classList.add('show');
    document.querySelector('.points-1')?.classList.remove('show');
    document.querySelector('.points-3')?.classList.remove('show');
  }
  if(value=="3"){
    document.querySelector('.points-3')?.classList.add('show');
    document.querySelector('.points-1')?.classList.remove('show');
    document.querySelector('.points-2')?.classList.remove('show');
  }
  if(value==""){
    document.querySelector('.points-1')?.classList.remove('show');
    document.querySelector('.points-2')?.classList.remove('show');
    document.querySelector('.points-3')?.classList.remove('show');
    alert("Please Select Batch");
  }
 }

}

