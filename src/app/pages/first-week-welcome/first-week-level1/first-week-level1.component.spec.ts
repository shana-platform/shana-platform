import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWeekLevel1Component } from './first-week-level1.component';

describe('FirstWeekLevel1Component', () => {
  let component: FirstWeekLevel1Component;
  let fixture: ComponentFixture<FirstWeekLevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstWeekLevel1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstWeekLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
