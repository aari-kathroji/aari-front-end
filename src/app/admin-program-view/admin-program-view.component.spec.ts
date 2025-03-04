import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProgramViewComponent } from './admin-program-view.component';

describe('AdminProgramViewComponent', () => {
  let component: AdminProgramViewComponent;
  let fixture: ComponentFixture<AdminProgramViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProgramViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminProgramViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
