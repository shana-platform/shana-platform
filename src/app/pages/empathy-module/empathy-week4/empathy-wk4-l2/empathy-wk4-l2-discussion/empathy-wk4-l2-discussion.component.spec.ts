import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk4L2DiscussionComponent } from './empathy-wk4-l2-discussion.component';

describe('EmpathyWk4L2DiscussionComponent', () => {
  let component: EmpathyWk4L2DiscussionComponent;
  let fixture: ComponentFixture<EmpathyWk4L2DiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk4L2DiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk4L2DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
