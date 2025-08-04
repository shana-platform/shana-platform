import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondWeekLevel5Component } from './second-week-level5.component';

describe('SecondWeekLevel5Component', () => {
  let component: SecondWeekLevel5Component;
  let fixture: ComponentFixture<SecondWeekLevel5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondWeekLevel5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondWeekLevel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
