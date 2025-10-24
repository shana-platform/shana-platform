import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week2L2DiscussionComponent } from './week2-l2-discussion.component';

describe('Week2L2DiscussionComponent', () => {
  let component: Week2L2DiscussionComponent;
  let fixture: ComponentFixture<Week2L2DiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week2L2DiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Week2L2DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
