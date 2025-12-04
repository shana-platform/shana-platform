import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningWk2L2DiscussionComponent } from './planning-wk2-l2-discussion.component';

describe('PlanningWk2L2DiscussionComponent', () => {
  let component: PlanningWk2L2DiscussionComponent;
  let fixture: ComponentFixture<PlanningWk2L2DiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanningWk2L2DiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningWk2L2DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
