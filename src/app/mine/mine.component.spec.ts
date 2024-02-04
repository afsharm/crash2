import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineComponent } from './mine.component';

describe('MineComponent', () => {
  let component: MineComponent;
  let fixture: ComponentFixture<MineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
