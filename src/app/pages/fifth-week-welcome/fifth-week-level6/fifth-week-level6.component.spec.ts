import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthWeekLevel6Component } from './fifth-week-level6.component';

describe('FifthWeekLevel6Component', () => {
  let component: FifthWeekLevel6Component;
  let fixture: ComponentFixture<FifthWeekLevel6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthWeekLevel6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthWeekLevel6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
