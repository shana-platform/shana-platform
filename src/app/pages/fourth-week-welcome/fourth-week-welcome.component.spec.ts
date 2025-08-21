import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthWeekWelcomeComponent } from './fourth-week-welcome.component';

describe('FourthWeekWelcomeComponent', () => {
  let component: FourthWeekWelcomeComponent;
  let fixture: ComponentFixture<FourthWeekWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthWeekWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthWeekWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
