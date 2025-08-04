import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondWeekWelcomeComponent } from './second-week-welcome.component';

describe('SecondWeekWelcomeComponent', () => {
  let component: SecondWeekWelcomeComponent;
  let fixture: ComponentFixture<SecondWeekWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondWeekWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondWeekWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
