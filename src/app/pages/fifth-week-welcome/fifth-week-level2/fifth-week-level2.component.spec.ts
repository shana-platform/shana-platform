import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthWeekLevel2Component } from './fifth-week-level2.component';

describe('FifthWeekLevel2Component', () => {
  let component: FifthWeekLevel2Component;
  let fixture: ComponentFixture<FifthWeekLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthWeekLevel2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthWeekLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
