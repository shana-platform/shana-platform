import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdWeekLevel7Component } from './third-week-level7.component';

describe('ThirdWeekLevel7Component', () => {
  let component: ThirdWeekLevel7Component;
  let fixture: ComponentFixture<ThirdWeekLevel7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdWeekLevel7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdWeekLevel7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
