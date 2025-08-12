import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWeekLevel5Component } from './first-week-level5.component';

describe('FirstWeekLevel5Component', () => {
  let component: FirstWeekLevel5Component;
  let fixture: ComponentFixture<FirstWeekLevel5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstWeekLevel5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstWeekLevel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
