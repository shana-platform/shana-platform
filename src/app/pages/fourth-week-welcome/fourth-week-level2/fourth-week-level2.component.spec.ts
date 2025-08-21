import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthWeekLevel2Component } from './fourth-week-level2.component';

describe('FourthWeekLevel2Component', () => {
  let component: FourthWeekLevel2Component;
  let fixture: ComponentFixture<FourthWeekLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthWeekLevel2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthWeekLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
