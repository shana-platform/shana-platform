import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthWeekLevel3Component } from './fifth-week-level3.component';

describe('FifthWeekLevel3Component', () => {
  let component: FifthWeekLevel3Component;
  let fixture: ComponentFixture<FifthWeekLevel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthWeekLevel3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthWeekLevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
