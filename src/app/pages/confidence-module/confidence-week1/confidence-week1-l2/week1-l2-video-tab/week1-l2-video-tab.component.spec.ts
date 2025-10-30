import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week1L2VideoTabComponent } from './week1-l2-video-tab.component';

describe('Week1L2VideoTabComponent', () => {
  let component: Week1L2VideoTabComponent;
  let fixture: ComponentFixture<Week1L2VideoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week1L2VideoTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Week1L2VideoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
