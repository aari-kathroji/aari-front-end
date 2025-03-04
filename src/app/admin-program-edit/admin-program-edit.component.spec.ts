import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProgramEditComponent } from './admin-program-edit.component';

describe('AdminProgramEditComponent', () => {
  let component: AdminProgramEditComponent;
  let fixture: ComponentFixture<AdminProgramEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProgramEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminProgramEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
