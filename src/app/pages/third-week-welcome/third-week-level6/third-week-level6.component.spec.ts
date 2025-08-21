import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdWeekLevel6Component } from './third-week-level6.component';

describe('ThirdWeekLevel6Component', () => {
  let component: ThirdWeekLevel6Component;
  let fixture: ComponentFixture<ThirdWeekLevel6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdWeekLevel6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdWeekLevel6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
