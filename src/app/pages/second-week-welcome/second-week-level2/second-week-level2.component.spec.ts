import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondWeekLevel2Component } from './second-week-level2.component';

describe('SecondWeekLevel2Component', () => {
  let component: SecondWeekLevel2Component;
  let fixture: ComponentFixture<SecondWeekLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondWeekLevel2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondWeekLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
