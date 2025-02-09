import { Component } from '@angular/core';
import { BatchService } from '../../services/batch.service';
import { AdminBatchService } from '../admin-batch.service';
import { Router } from 'express';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-adminbatch',
  standalone: true,
  imports: [RouterLink,RouterModule,RouterOutlet],
  templateUrl: './adminbatch.component.html',
  styleUrl: './adminbatch.component.css'
})
export class AdminbatchComponent {
  constructor(private batchService: AdminBatchService) {

  }
  getBatch(batch_id: string) {
    return this.batchService.getBatch(batch_id);

  }
}
