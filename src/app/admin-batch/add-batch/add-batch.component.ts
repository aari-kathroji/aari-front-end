import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { BatchService } from '../../../services/batch.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { EventEmitter } from 'stream';
@Component({
  selector: 'app-add-batch',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule],
  templateUrl: './add-batch.component.html',
  styleUrl: './add-batch.component.css'
})
export class AddBatchComponent implements OnInit{
  selectedBatch: any;
  
  newBatchForm : FormGroup;

  edit : boolean = false;


  constructor(private fb : FormBuilder, 
    private batchService : BatchService,
    private dialogRef : MatDialogRef<AddBatchComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any,
  ){}

  ngOnInit(){
    this.intializeForm();
    if(this.data && this.data.edit){
      this.edit = true;
      this.selectedBatch = this.data.batch;
      this.newBatchForm.patchValue({
        id: this.selectedBatch.id,
        batchName: this.selectedBatch.batch_name,
        batchStatus: this.selectedBatch.batch_status_id,
        courseName: this.selectedBatch.course_id
      });
    }

  }


  intializeForm(){
    this.newBatchForm = this.fb.group(
      {
        id : [''],
        batchName : ['', Validators.required],
        batchStatus : ['', Validators.required],
        courseName : ['',Validators.required]
      }
    );
  }

  saveBatch(){
    if(this.newBatchForm.valid){
  
      const newBatchData = {
        id: this.newBatchForm.get('id')?.value,
        batch_name: this.newBatchForm.get('batchName')?.value,
        batch_status_id: this.newBatchForm.get('batchStatus')?.value,
        course_id: this.newBatchForm.get('courseName')?.value
      };
  
      
      if (this.edit) {
        //update
        this.batchService.updateBatch(newBatchData).subscribe(
          (response) => {
            console.log('Batch updated successfully:', response);
            this.dialogRef.close();
          },
          (error) => {
            console.error('Error updating batch:', error);
          
          }
        );
      } else {
        // Add new batch
        this.batchService.saveBatch(newBatchData).subscribe(
          (response) => {
            console.log('Batch saved successfully:', response);
            this.dialogRef.close();
          },
          (error) => {
            console.error('Error saving batch:', error);
          }
        );
      }
    }
  }
  
  clearForm(){
    this.newBatchForm.reset();
  }

}


