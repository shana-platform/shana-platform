import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWeekLevel6Component } from './first-week-level6.component';

describe('FirstWeekLevel6Component', () => {
  let component: FirstWeekLevel6Component;
  let fixture: ComponentFixture<FirstWeekLevel6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstWeekLevel6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstWeekLevel6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
