import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondWeekLevel7Component } from './second-week-level7.component';

describe('SecondWeekLevel7Component', () => {
  let component: SecondWeekLevel7Component;
  let fixture: ComponentFixture<SecondWeekLevel7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondWeekLevel7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondWeekLevel7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
