import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { BatchService } from '../../services/batch.service';
import { error } from 'console';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { EditBatchComponent } from './edit-batch/edit-batch.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

export interface Batch {
  id: string;
  batch_name: string;
  batch_status_id : number;
  course_id : number;
};

@Component({
  selector: 'app-admin-batch',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, AddBatchComponent, EditBatchComponent,MatDialogModule],
  templateUrl: './admin-batch.component.html',
  styleUrl: './admin-batch.component.css'
})
export class AdminBatchComponent implements OnInit{

  singleBatch:Batch[];

  getBatchStatusName(id: number): string {
    switch (id) {
      case 1: return 'Initial';
      case 2: return 'Running';
      case 3: return 'Completed';
      default: return 'Unknown';
    }
  }

  getCourseName(id : number) : string{
    switch(id){
      case 1 : return 'Course A';
      case 2 : return 'Course B';
      case 3 : return 'Course C';
      default : return 'UnKnown';
    }
  }
  constructor(
    private fb : FormBuilder ,
    private batchService: BatchService,
    private dialog : MatDialog,
  ){}

  ngOnInit() {

  this.loadBatches();
    
  }


  loadBatches(){
    this.batchService.getAllBatch().subscribe(
      (data: Batch[]) => {
        this.singleBatch = data;
      },
      (error) => {
        console.error('Error fetching batches:', error);
      }
    );
  }

    addBatch(){
      const dialogRef = this.dialog.open(AddBatchComponent);

      dialogRef.afterClosed().subscribe(() => {
        this.loadBatches();
      });
    }
    

    editBatch(batch : Batch){
      const dialogRef = this.dialog.open(AddBatchComponent,{
        data : {batch : batch, edit : true},
      });

      dialogRef.afterClosed().subscribe(()=>{
        this.loadBatches();
      })
    }

  deleteBatch(id:string){
    alert('Are you sure you want to delete the field');
    this.batchService.deleteBatch(id).subscribe(
      (data: Batch[]) => {
        console.log(data);
        this.loadBatches();
      },
      (error) => {
        console.error('Error fetching batches:', error);
      }
    );

  }
}
