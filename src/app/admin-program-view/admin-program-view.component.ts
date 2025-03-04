import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../program.service';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-program-view',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './admin-program-view.component.html',
  styleUrl: './admin-program-view.component.css'
})
export class AdminProgramViewComponent implements OnInit {
  programDetails: any;

  constructor(
    private programService: ProgramService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const programId = this.route.snapshot.paramMap.get('_id');
    this.programService.getProgram(programId).subscribe((data) => {
      this.programDetails = data
      console.log(this.programDetails.techs);
    })
  }
}
