import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdWeekLevel5Component } from './third-week-level5.component';

describe('ThirdWeekLevel5Component', () => {
  let component: ThirdWeekLevel5Component;
  let fixture: ComponentFixture<ThirdWeekLevel5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdWeekLevel5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdWeekLevel5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
