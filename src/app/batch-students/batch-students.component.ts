import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AdminBatchService } from '../admin-batch.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-batch-students',
  standalone: true,
  imports: [RouterLink, RouterModule, RouterOutlet,CommonModule,ReactiveFormsModule],
  templateUrl: './batch-students.component.html',
  styleUrl: './batch-students.component.css',
  providers: [AdminBatchService]
})
export class BatchStudentsComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private batchService: AdminBatchService
  ) { }
  students:any[]=[];

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('_id');
    if (id) {
      this.batchService.getBatch(id).subscribe((data: any) => {
        this.students = data;
      });
    }
  }
}

