import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWeekLevel3Component } from './first-week-level3.component';

describe('FirstWeekLevel3Component', () => {
  let component: FirstWeekLevel3Component;
  let fixture: ComponentFixture<FirstWeekLevel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstWeekLevel3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstWeekLevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
