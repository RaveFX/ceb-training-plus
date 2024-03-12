import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramListDgmComponent } from './program-list-dgm.component';

describe('ProgramListDgmComponent', () => {
  let component: ProgramListDgmComponent;
  let fixture: ComponentFixture<ProgramListDgmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramListDgmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramListDgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
