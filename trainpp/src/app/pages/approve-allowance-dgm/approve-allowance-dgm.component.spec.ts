import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveAllowanceDgmComponent } from './approve-allowance-dgm.component';

describe('ApproveAllowanceDgmComponent', () => {
  let component: ApproveAllowanceDgmComponent;
  let fixture: ComponentFixture<ApproveAllowanceDgmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveAllowanceDgmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApproveAllowanceDgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
