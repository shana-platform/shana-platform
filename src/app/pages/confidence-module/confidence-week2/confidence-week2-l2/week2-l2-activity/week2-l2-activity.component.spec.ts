import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week2L2ActivityComponent } from './week2-l2-activity.component';

describe('Week2L2ActivityComponent', () => {
  let component: Week2L2ActivityComponent;
  let fixture: ComponentFixture<Week2L2ActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week2L2ActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Week2L2ActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
