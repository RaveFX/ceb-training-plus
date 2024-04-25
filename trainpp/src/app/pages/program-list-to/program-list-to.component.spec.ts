import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramListToComponent } from './program-list-to.component';

describe('ProgramListToComponent', () => {
  let component: ProgramListToComponent;
  let fixture: ComponentFixture<ProgramListToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramListToComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramListToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
