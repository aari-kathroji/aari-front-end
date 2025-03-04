import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminprogramregisterComponent } from './adminprogramregister.component';

describe('AdminprogramregisterComponent', () => {
  let component: AdminprogramregisterComponent;
  let fixture: ComponentFixture<AdminprogramregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminprogramregisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminprogramregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
