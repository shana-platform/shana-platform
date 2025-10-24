import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week2L2VideoComponent } from './week2-l2-video.component';

describe('Week2L2VideoComponent', () => {
  let component: Week2L2VideoComponent;
  let fixture: ComponentFixture<Week2L2VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week2L2VideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Week2L2VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
