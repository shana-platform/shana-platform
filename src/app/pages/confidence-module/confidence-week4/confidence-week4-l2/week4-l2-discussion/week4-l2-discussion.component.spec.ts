import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week4L2DiscussionComponent } from './week4-l2-discussion.component';

describe('Week4L2DiscussionComponent', () => {
  let component: Week4L2DiscussionComponent;
  let fixture: ComponentFixture<Week4L2DiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week4L2DiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Week4L2DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
