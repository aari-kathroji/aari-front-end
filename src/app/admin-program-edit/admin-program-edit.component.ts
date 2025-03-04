import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ProgramService } from '../program.service';
import { TechService } from '../tech.service';
import { StaffService } from '../staff.service';
import { BatchService } from '../batch.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-program-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './admin-program-edit.component.html',
  styleUrl: './admin-program-edit.component.css'
})
export class AdminProgramEditComponent {
  techs: any = [];
  staffs: any = [];
  batches: any = [];
  programForm :FormGroup= new FormGroup({
    program_name: new FormControl(""),
    program_description: new FormControl(""),
    tech_id: new FormControl<string[]>([]),
    staff_id: new FormControl(""),
    batch_id: new FormControl("")
  })
  programId: any = this.route.snapshot.paramMap.get('_id');

  constructor(
    private programService: ProgramService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private batchService: BatchService,
    private staffServive: StaffService,
    private techService: TechService
  ) { }

  ngOnInit(): void {
    this.techService.getAllTechs().subscribe(tech => {
      this.techs = tech;
    })
    console.log(this.techs)
    this.batchService.getBatchs().subscribe(batch => {
      this.batches = batch;
    })
    this.staffServive.getStaffs().subscribe(staff => {
      this.staffs = staff;
    })
    const programId = this.route.snapshot.paramMap.get('_id');
    this.programService.getProgram_2(programId).subscribe((data) => {
      this.programForm.patchValue(data);
    })
    console.log(this.programForm.value)
  }
  update() {
    this.programService.updateProgram(this.programId, this.programForm.value).subscribe({
      next: (response: string) => {
        console.log('Success:', response);
        if (response.includes('successfully')) {
          window.location.href = '/admin-program';
        }
      },
      error: (error) => {
        console.error('Error updating program:', error);
        // Handle error appropriately
      }
    });
  }

  onCheckboxChange(event: any) {
    const value = event.target.value;
    const isChecked = event.target.checked;
    const currentValues = this.programForm.get('tech_id')?.value || [];

    if (isChecked) {
      this.programForm.get('tech_id')?.setValue([...currentValues, value]);
    } else {
      this.programForm.get('tech_id')?.setValue(
        currentValues.filter((item: string) => item !== value)
      );
    }
  }
  

}
