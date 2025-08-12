import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWeekLevel4Component } from './first-week-level4.component';

describe('FirstWeekLevel4Component', () => {
  let component: FirstWeekLevel4Component;
  let fixture: ComponentFixture<FirstWeekLevel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstWeekLevel4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstWeekLevel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
