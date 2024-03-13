import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramListConfirmDgmComponent } from './program-list-confirm-dgm.component';

describe('ProgramListConfirmDgmComponent', () => {
  let component: ProgramListConfirmDgmComponent;
  let fixture: ComponentFixture<ProgramListConfirmDgmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramListConfirmDgmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramListConfirmDgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
