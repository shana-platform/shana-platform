import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthWeekLevel6Component } from './fourth-week-level6.component';

describe('FourthWeekLevel6Component', () => {
  let component: FourthWeekLevel6Component;
  let fixture: ComponentFixture<FourthWeekLevel6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthWeekLevel6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthWeekLevel6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
