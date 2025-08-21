import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthWeekLevel3Component } from './fourth-week-level3.component';

describe('FourthWeekLevel3Component', () => {
  let component: FourthWeekLevel3Component;
  let fixture: ComponentFixture<FourthWeekLevel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthWeekLevel3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthWeekLevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
