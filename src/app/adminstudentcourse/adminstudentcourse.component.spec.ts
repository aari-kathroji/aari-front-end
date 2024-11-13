import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstudentcourseComponent } from './adminstudentcourse.component';

describe('AdminstudentcourseComponent', () => {
  let component: AdminstudentcourseComponent;
  let fixture: ComponentFixture<AdminstudentcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminstudentcourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminstudentcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
