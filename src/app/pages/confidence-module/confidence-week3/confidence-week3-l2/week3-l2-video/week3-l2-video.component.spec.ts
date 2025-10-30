import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week3L2VideoComponent } from './week3-l2-video.component';

describe('Week3L2VideoComponent', () => {
  let component: Week3L2VideoComponent;
  let fixture: ComponentFixture<Week3L2VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week3L2VideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Week3L2VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
