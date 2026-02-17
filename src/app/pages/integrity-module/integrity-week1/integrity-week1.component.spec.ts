import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrityWeek1Component } from './integrity-week1.component';

describe('IntegrityWeek1Component', () => {
  let component: IntegrityWeek1Component;
  let fixture: ComponentFixture<IntegrityWeek1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrityWeek1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegrityWeek1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
