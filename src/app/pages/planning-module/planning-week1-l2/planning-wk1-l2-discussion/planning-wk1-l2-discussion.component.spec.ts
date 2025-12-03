import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWk1L2DiscussionComponent } from './planning-wk1-l2-discussion.component';

describe('PlanningWk1L2DiscussionComponent', () => {
  let component: PlanningWk1L2DiscussionComponent;
  let fixture: ComponentFixture<PlanningWk1L2DiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWk1L2DiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWk1L2DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
