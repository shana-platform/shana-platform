import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWk4L2DiscussionComponent } from './planning-wk4-l2-discussion.component';

describe('PlanningWk4L2DiscussionComponent', () => {
  let component: PlanningWk4L2DiscussionComponent;
  let fixture: ComponentFixture<PlanningWk4L2DiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWk4L2DiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWk4L2DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
