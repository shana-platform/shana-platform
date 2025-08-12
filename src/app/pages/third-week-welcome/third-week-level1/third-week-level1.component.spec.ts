import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdWeekLevel1Component } from './third-week-level1.component';

describe('ThirdWeekLevel1Component', () => {
  let component: ThirdWeekLevel1Component;
  let fixture: ComponentFixture<ThirdWeekLevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdWeekLevel1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdWeekLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
