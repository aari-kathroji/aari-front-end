import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbatchComponent } from './adminbatch.component';

describe('AdminbatchComponent', () => {
  let component: AdminbatchComponent;
  let fixture: ComponentFixture<AdminbatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminbatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminbatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
