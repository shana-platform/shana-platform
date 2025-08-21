import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthWeekLevel7Component } from './fourth-week-level7.component';

describe('FourthWeekLevel7Component', () => {
  let component: FourthWeekLevel7Component;
  let fixture: ComponentFixture<FourthWeekLevel7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthWeekLevel7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthWeekLevel7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
