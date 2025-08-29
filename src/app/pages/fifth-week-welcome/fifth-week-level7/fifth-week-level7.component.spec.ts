import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthWeekLevel7Component } from './fifth-week-level7.component';

describe('FifthWeekLevel7Component', () => {
  let component: FifthWeekLevel7Component;
  let fixture: ComponentFixture<FifthWeekLevel7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthWeekLevel7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthWeekLevel7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
