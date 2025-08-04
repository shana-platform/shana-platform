import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondWeekLevel6Component } from './second-week-level6.component';

describe('SecondWeekLevel6Component', () => {
  let component: SecondWeekLevel6Component;
  let fixture: ComponentFixture<SecondWeekLevel6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondWeekLevel6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondWeekLevel6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
