import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentstaffComponent } from './studentstaff.component';

describe('StudentstaffComponent', () => {
  let component: StudentstaffComponent;
  let fixture: ComponentFixture<StudentstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentstaffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
