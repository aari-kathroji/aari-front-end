import { Component } from '@angular/core';
import { TechService } from '../tech.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BatchService } from '../batch.service';
import { StaffService } from '../staff.service';
import { ProgramService } from '../program.service';

@Component({
  selector: 'app-adminprogramregister',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './adminprogramregister.component.html',
  styleUrl: './adminprogramregister.component.css'
})
export class AdminprogramregisterComponent {
  techs: any = [];
  staffs: any = [];
  batches: any = [];
  programForm = new FormGroup({
    program_name: new FormControl(""),
    program_description: new FormControl(""),
    tech_id: new FormControl<string[]>([]),
    staff_id: new FormControl(""),
    batch_id: new FormControl("")
  })

  constructor(private techService: TechService, private formBuilder: FormBuilder, private batchService: BatchService, private staffServive: StaffService, private programService: ProgramService) { }

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

  }

  submit() {
    this.programService.postProgram(this.programForm.value).subscribe(data => {
      console.log(data);
    })
    setInterval(() => {window.location.href='/admin-program'},1000);
  }

  onCheckboxChange(event: any) {
    const value = event.target.value;
    const isChecked = event.target.checked;
    const currentValues = this.programForm.get('tech_id')?.value || [];

    if (isChecked) {
      this.programForm.get('tech_id')?.setValue([...currentValues, value]);
    } else {
      this.programForm.get('tech_id')?.setValue(
        currentValues.filter(item => item !== value)
      );
    }
  }

}
