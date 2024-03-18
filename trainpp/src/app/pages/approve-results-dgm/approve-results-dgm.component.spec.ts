import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveResultsDgmComponent } from './approve-results-dgm.component';

describe('ApproveResultsDgmComponent', () => {
  let component: ApproveResultsDgmComponent;
  let fixture: ComponentFixture<ApproveResultsDgmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveResultsDgmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproveResultsDgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
