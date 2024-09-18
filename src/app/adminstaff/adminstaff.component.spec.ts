import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminstaffComponent } from './adminstaff.component';

describe('AdminstaffComponent', () => {
  let component: AdminstaffComponent;
  let fixture: ComponentFixture<AdminstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminstaffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
