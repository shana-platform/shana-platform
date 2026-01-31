import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespectWk4L1DiscussionComponent } from './respect-wk4-l1-discussion.component';

describe('RespectWk4L1DiscussionComponent', () => {
  let component: RespectWk4L1DiscussionComponent;
  let fixture: ComponentFixture<RespectWk4L1DiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespectWk4L1DiscussionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespectWk4L1DiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
