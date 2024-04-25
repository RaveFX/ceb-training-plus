import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceToComponent } from './attendance-to.component';

describe('AttendanceToComponent', () => {
  let component: AttendanceToComponent;
  let fixture: ComponentFixture<AttendanceToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttendanceToComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttendanceToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
