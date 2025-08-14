import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdWeekLevel4Component } from './third-week-level4.component';

describe('ThirdWeekLevel4Component', () => {
  let component: ThirdWeekLevel4Component;
  let fixture: ComponentFixture<ThirdWeekLevel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdWeekLevel4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdWeekLevel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
