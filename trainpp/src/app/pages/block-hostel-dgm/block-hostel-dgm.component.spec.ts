import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockHostelDgmComponent } from './block-hostel-dgm.component';

describe('BlockHostelDgmComponent', () => {
  let component: BlockHostelDgmComponent;
  let fixture: ComponentFixture<BlockHostelDgmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockHostelDgmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockHostelDgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
