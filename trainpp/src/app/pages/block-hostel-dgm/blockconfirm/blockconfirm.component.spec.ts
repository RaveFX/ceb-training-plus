import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockconfirmComponent } from './blockconfirm.component';

describe('BlockconfirmComponent', () => {
  let component: BlockconfirmComponent;
  let fixture: ComponentFixture<BlockconfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockconfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
