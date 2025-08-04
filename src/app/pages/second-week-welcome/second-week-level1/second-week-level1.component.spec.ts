import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondWeekLevel1Component } from './second-week-level1.component';

describe('SecondWeekLevel1Component', () => {
  let component: SecondWeekLevel1Component;
  let fixture: ComponentFixture<SecondWeekLevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondWeekLevel1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondWeekLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
