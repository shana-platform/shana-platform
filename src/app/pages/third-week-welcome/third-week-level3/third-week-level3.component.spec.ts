import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdWeekLevel3Component } from './third-week-level3.component';

describe('ThirdWeekLevel3Component', () => {
  let component: ThirdWeekLevel3Component;
  let fixture: ComponentFixture<ThirdWeekLevel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdWeekLevel3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdWeekLevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
