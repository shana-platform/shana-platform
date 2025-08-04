import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWeekWelcomeComponent } from './first-week-welcome.component';

describe('FirstWeekWelcomeComponent', () => {
  let component: FirstWeekWelcomeComponent;
  let fixture: ComponentFixture<FirstWeekWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstWeekWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstWeekWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
