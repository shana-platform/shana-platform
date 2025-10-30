import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week3L2DiscussionComponent } from './week3-l2-discussion.component';

describe('Week3L2DiscussionComponent', () => {
  let component: Week3L2DiscussionComponent;
  let fixture: ComponentFixture<Week3L2DiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week3L2DiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Week3L2DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
