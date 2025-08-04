import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondWeekLevel4Component } from './second-week-level4.component';

describe('SecondWeekLevel4Component', () => {
  let component: SecondWeekLevel4Component;
  let fixture: ComponentFixture<SecondWeekLevel4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondWeekLevel4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondWeekLevel4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
