import { Component } from '@angular/core';
import { TechService } from '../tech.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-adminprogram',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './adminprogram.component.html',
  styleUrl: './adminprogram.component.css'
})
export class AdminprogramComponent {

  programForm = new FormGroup({
    course_name: new FormControl(""),
    tech_id: new FormControl<string[]>([]),
    staff_id: new FormControl(""),
    batch_id: new FormControl("")
  })

  constructor(private techService: TechService) { }

  submit(){
    console.log(this.programForm.value)

  }

  onCheckboxChange(event: any) {
    const value = event.target.value;
    const isChecked = event.target.checked;
    const currentValues = this.programForm.get('tech_id')?.value || [];
    
    if(isChecked) {
      this.programForm.get('tech_id')?.setValue([...currentValues, value]);
    } else {
      this.programForm.get('tech_id')?.setValue(
        currentValues.filter(item => item !== value)
      );
    }
  }

}
