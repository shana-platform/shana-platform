import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthWeekLevel1Component } from './fifth-week-level1.component';

describe('FifthWeekLevel1Component', () => {
  let component: FifthWeekLevel1Component;
  let fixture: ComponentFixture<FifthWeekLevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthWeekLevel1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthWeekLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
