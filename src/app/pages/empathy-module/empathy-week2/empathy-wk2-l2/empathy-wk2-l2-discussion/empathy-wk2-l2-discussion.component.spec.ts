import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk2L2DiscussionComponent } from './empathy-wk2-l2-discussion.component';

describe('EmpathyWk2L2DiscussionComponent', () => {
  let component: EmpathyWk2L2DiscussionComponent;
  let fixture: ComponentFixture<EmpathyWk2L2DiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk2L2DiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk2L2DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
