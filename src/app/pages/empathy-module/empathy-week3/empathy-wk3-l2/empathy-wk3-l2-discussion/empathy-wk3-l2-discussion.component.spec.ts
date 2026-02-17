import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk3L2DiscussionComponent } from './empathy-wk3-l2-discussion.component';

describe('EmpathyWk3L2DiscussionComponent', () => {
  let component: EmpathyWk3L2DiscussionComponent;
  let fixture: ComponentFixture<EmpathyWk3L2DiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk3L2DiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk3L2DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
