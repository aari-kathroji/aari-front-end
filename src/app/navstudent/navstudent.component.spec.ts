import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavstudentComponent } from './navstudent.component';

describe('NavstudentComponent', () => {
  let component: NavstudentComponent;
  let fixture: ComponentFixture<NavstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavstudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
