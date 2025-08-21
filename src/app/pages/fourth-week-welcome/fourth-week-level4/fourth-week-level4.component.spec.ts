import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthWeekLevel4Component } from './fourth-week-level4.component';

describe('FourthWeekLevel4Component', () => {
  let component: FourthWeekLevel4Component;
  let fixture: ComponentFixture<FourthWeekLevel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthWeekLevel4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthWeekLevel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
