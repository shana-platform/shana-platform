import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdWeekLevel2Component } from './third-week-level2.component';

describe('ThirdWeekLevel2Component', () => {
  let component: ThirdWeekLevel2Component;
  let fixture: ComponentFixture<ThirdWeekLevel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdWeekLevel2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdWeekLevel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
