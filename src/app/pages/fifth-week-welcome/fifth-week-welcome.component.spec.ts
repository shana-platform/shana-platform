import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthWeekWelcomeComponent } from './fifth-week-welcome.component';

describe('FifthWeekWelcomeComponent', () => {
  let component: FifthWeekWelcomeComponent;
  let fixture: ComponentFixture<FifthWeekWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthWeekWelcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthWeekWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
