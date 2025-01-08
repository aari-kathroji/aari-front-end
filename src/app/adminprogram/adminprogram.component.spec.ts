import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprogramComponent } from './adminprogram.component';

describe('AdminprogramComponent', () => {
  let component: AdminprogramComponent;
  let fixture: ComponentFixture<AdminprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminprogramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
