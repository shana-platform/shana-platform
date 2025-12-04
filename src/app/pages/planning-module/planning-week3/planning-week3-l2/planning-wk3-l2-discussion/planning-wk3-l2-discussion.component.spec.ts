import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWk3L2DiscussionComponent } from './planning-wk3-l2-discussion.component';

describe('PlanningWk3L2DiscussionComponent', () => {
  let component: PlanningWk3L2DiscussionComponent;
  let fixture: ComponentFixture<PlanningWk3L2DiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWk3L2DiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWk3L2DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
