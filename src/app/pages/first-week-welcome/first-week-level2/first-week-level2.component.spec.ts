import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWeekLevel2Component } from './first-week-level2.component';

describe('FirstWeekLevel2Component', () => {
  let component: FirstWeekLevel2Component;
  let fixture: ComponentFixture<FirstWeekLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstWeekLevel2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstWeekLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
