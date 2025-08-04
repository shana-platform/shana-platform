import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondWeekLevel3Component } from './second-week-level3.component';

describe('SecondWeekLevel3Component', () => {
  let component: SecondWeekLevel3Component;
  let fixture: ComponentFixture<SecondWeekLevel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondWeekLevel3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondWeekLevel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
