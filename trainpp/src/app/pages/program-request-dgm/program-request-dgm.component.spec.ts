import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramRequestDGMComponent } from './program-request-dgm.component';

describe('ProgramRequestDGMComponent', () => {
  let component: ProgramRequestDGMComponent;
  let fixture: ComponentFixture<ProgramRequestDGMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramRequestDGMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramRequestDGMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
