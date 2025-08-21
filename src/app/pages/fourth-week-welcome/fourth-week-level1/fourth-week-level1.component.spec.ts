import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthWeekLevel1Component } from './fourth-week-level1.component';

describe('FourthWeekLevel1Component', () => {
  let component: FourthWeekLevel1Component;
  let fixture: ComponentFixture<FourthWeekLevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthWeekLevel1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthWeekLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
