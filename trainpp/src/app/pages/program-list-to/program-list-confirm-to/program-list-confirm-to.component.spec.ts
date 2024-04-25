import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramListConfirmToComponent } from './program-list-confirm-to.component';

describe('ProgramListConfirmToComponent', () => {
  let component: ProgramListConfirmToComponent;
  let fixture: ComponentFixture<ProgramListConfirmToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramListConfirmToComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramListConfirmToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
