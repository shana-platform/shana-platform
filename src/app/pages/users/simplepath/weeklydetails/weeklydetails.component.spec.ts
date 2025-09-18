import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklydetailsComponent } from './weeklydetails.component';

describe('WeeklydetailsComponent', () => {
  let component: WeeklydetailsComponent;
  let fixture: ComponentFixture<WeeklydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklydetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
