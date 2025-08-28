import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthWeekLevel5Component } from './fifth-week-level5.component';

describe('FifthWeekLevel5Component', () => {
  let component: FifthWeekLevel5Component;
  let fixture: ComponentFixture<FifthWeekLevel5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthWeekLevel5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthWeekLevel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
