import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthWeekLevel4Component } from './fifth-week-level4.component';

describe('FifthWeekLevel4Component', () => {
  let component: FifthWeekLevel4Component;
  let fixture: ComponentFixture<FifthWeekLevel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthWeekLevel4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthWeekLevel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
