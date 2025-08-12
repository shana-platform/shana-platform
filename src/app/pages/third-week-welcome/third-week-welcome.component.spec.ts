import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdWeekWelcomeComponent } from './third-week-welcome.component';

describe('ThirdWeekWelcomeComponent', () => {
  let component: ThirdWeekWelcomeComponent;
  let fixture: ComponentFixture<ThirdWeekWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdWeekWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdWeekWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
