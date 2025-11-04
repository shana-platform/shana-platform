import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week4L2ActivityComponent } from './week4-l2-activity.component';

describe('Week4L2ActivityComponent', () => {
  let component: Week4L2ActivityComponent;
  let fixture: ComponentFixture<Week4L2ActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week4L2ActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Week4L2ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
