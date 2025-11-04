import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week4L2VideoComponent } from './week4-l2-video.component';

describe('Week4L2VideoComponent', () => {
  let component: Week4L2VideoComponent;
  let fixture: ComponentFixture<Week4L2VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week4L2VideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Week4L2VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
