import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpathyWk1L1DiscussionComponent } from './empathy-wk1-l1-discussion.component';

describe('EmpathyWk1L1DiscussionComponent', () => {
  let component: EmpathyWk1L1DiscussionComponent;
  let fixture: ComponentFixture<EmpathyWk1L1DiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpathyWk1L1DiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpathyWk1L1DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
