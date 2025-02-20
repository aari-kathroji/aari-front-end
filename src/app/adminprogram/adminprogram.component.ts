import { Component } from '@angular/core';
import { TechService } from '../tech.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BatchService } from '../batch.service';


@Component({
  selector: 'app-adminprogram',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './adminprogram.component.html',
  styleUrl: './adminprogram.component.css'
})
export class AdminprogramComponent {

  techs: any = [];
  staffs: any = [];
  batches: any = [];
  programForm = new FormGroup({
    course_name: new FormControl(""),
    tech_id: new FormControl<string[]>([]),
    staff_id: new FormControl(""),
    batch_id: new FormControl("")
  })

  constructor(private techService: TechService,private formBuilder: FormBuilder,private batchService:BatchService) { }

  ngOnInit(): void {
    this.techService.getAllTechs().subscribe(tech => {
      this.techs = tech;
    })
    console.log(this.techs)
    this.batchService.getBatchs().subscribe(batch => {
      this.batches = batch;
    })

  }

  submit() {
    console.log(this.programForm.value)

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
